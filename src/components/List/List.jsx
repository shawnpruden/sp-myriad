import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation } from 'swiper';

import { FaChevronRight } from 'react-icons/fa';

import {
  Button,
  Container,
  Header,
  Prompt,
  Title,
  Underline,
  Wrapper,
} from './styles';

import tmdb, { mediaType } from 'apis/tmdb';

import Card from '../Card/Card';
import { useMedia, useOpacity } from 'hooks';

const reduce = (arr) => {
  return arr.reduce((result, curObj) => {
    if (!result.some((prevObj) => prevObj.id === curObj.id)) {
      result.push(curObj);
    }

    return result
      .filter((item) => item.poster_path)
      .sort(() => 0.5 - Math.random());
  }, []);
};

export default function List({
  listData: { title, path, type, dataType, listType, id },
}) {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const { xs, md } = useMedia();
  const { isVisible } = useOpacity();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { page: Math.floor(Math.random() * 5 + 1) };

        let response;

        if (listType !== 'similar') {
          switch (type) {
            case mediaType.all:
              response = await tmdb.getTrends(dataType, { params });
              break;

            case mediaType.movie:
              response = await (isNaN(dataType)
                ? tmdb.getMovies(dataType, { params })
                : tmdb.getWithGenres(type, dataType, { params }));
              break;

            case mediaType.tv:
              response = await (isNaN(dataType)
                ? tmdb.getTvSeries(dataType, { params })
                : tmdb.getWithGenres(type, dataType, { params }));
              break;

            default:
              break;
          }
        } else {
          response = await tmdb.getSimilar(type, id);
        }

        setItems(response.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [type, dataType, listType, id]);

  const space = (() => {
    if (xs) return 10;
    if (md) return 15;

    return 20;
  })();

  const listItems = useMemo(() => reduce(items), [items]);

  return (
    <>
      {!listItems.length && listType === 'similar' ? (
        <Prompt style={{ opacity: isVisible ? 1 : 0 }}>
          No similar items found.
        </Prompt>
      ) : (
        <Container>
          {title && (
            <Header>
              <Title>
                {title}
                <Underline />
              </Title>

              <Button onClick={() => navigate(`/${path}`)}>
                View More
                <FaChevronRight />
              </Button>
            </Header>
          )}

          <Wrapper listType={listType}>
            <Swiper
              modules={[FreeMode, Mousewheel, Navigation]}
              freeMode={true}
              navigation={true}
              mousewheel={{ forceToAxis: true }} // > disable swipe on y-axis
              spaceBetween={space}
              slidesPerView={'auto'}
              slidesPerGroup={5}
            >
              {listItems?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} type={type} listType={listType} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Wrapper>
        </Container>
      )}
    </>
  );
}
