import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation } from 'swiper';

import { FaChevronRight } from 'react-icons/fa';

import { Button, Container, Header, Title, Underline, Wrapper } from './styles';

import Card from '../Card/Card';
import tmdb, { mediaType } from '../../apis/tmdb';
import { useMedia } from '../../hooks';

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
  listData: { title, path, type, dataType, id },
}) {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const { xs } = useMedia();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { page: Math.floor(Math.random() * 5 + 1) };

        let response;

        switch (type) {
          case mediaType.all:
            response = await tmdb.getTrends(dataType, { params });
            break;

          case mediaType.movie:
            response = await (isNaN(dataType)
              ? tmdb.getMovies(dataType, { params })
              : tmdb.getMoviesWithGenres(dataType, { params }));
            break;

          case mediaType.tv:
            response = await (isNaN(dataType)
              ? tmdb.getTvSeries(dataType, { params })
              : tmdb.getTvWithGenres(dataType, { params }));
            break;

          default:
            response = await tmdb.getSimilar(dataType, id);
            break;
        }

        setItems(response.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [type, id, dataType]);

  const listItems = useMemo(() => reduce(items), [items]);

  return (
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

      <Wrapper type={type}>
        <Swiper
          modules={[FreeMode, Mousewheel, Navigation]}
          freeMode={true}
          navigation={true}
          mousewheel={{ forceToAxis: true }} // > disable swipe on y-axis
          spaceBetween={xs ? 10 : 20}
          slidesPerView={'auto'}
          slidesPerGroup={5}
        >
          {listItems?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card item={item} type={type === 'similar' ? dataType : type} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </Container>
  );
}
