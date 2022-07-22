import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-scroll';

import { FaChevronRight } from 'react-icons/fa';

import {
  Catalog,
  Container,
  Content,
  Divider,
  FadeEffect,
  Frame,
  Left,
  Right,
  Subtitle,
  Video,
} from './styles';

import tmdb from '../../apis/tmdb';

import Info from './Info';
import Casts from './Casts';
import Trailers from './Trailers';
import { List } from '../../components';

import { useUpdate } from '../../hooks/useUpdate';

const catalog = [
  { title: 'About', id: 'about' },
  { title: 'Overview', id: 'overview' },
  { title: 'Casts', id: 'casts' },
  { title: 'Trailers', id: 'trailers' },
  { title: 'More Like This', id: 'more' },
];

export default function Detail() {
  const [item, setItem] = useState({});
  const [videos, setVideos] = useState([]);
  const [casts, setCasts] = useState([]);

  const [isVisible, setIsVisible] = useState(false);
  const update = useUpdate();

  const { type, id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await tmdb.getDetail(type, id);
        const { results } = await tmdb.getVideos(type, id);
        const { cast } = await tmdb.getCredits(type, id);

        console.log(
          '%cLogged',
          'color: #f78c6c; margin: 0.2rem',
          'at',
          new Date().toLocaleTimeString('en-US', { hour12: false }),
          '\n',
          { data },
          { results },
          { cast }
        );

        setItem(data);
        setVideos(results);
        setCasts(cast);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, type]);

  return (
    <Container>
      <Left>
        <Frame>
          <img
            src={`https://image.tmdb.org/t/p/w500${
              item.poster_path
            }?${Date.now()}`}
            alt=""
            style={{ opacity: isVisible ? 1 : 0 }}
            onLoad={() => setIsVisible(true)}
            onError={item.poster_path && update}
          />
        </Frame>

        <Catalog>
          {catalog.map(({ title, id }) => (
            <Fragment key={id}>
              <Link
                to={id}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
              >
                <i>
                  <FaChevronRight />
                </i>
                {title}
              </Link>

              <br />
            </Fragment>
          ))}
        </Catalog>
      </Left>

      <Right>
        <Video id="about">
          {videos.length ? (
            <iframe
              title="trailer"
              src={`https://www.youtube.com/embed/${videos[0]?.key}?autoplay=1&rel=0`}
              allow="fullscreen"
            ></iframe>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${
                item.backdrop_path
              }?${Date.now()}`}
              alt={
                item.title ||
                item.original_title ||
                item.name ||
                item.original_name
              }
              style={{ opacity: isVisible && item.backdrop_path ? 1 : 0 }}
              onError={item.backdrop_path && update}
            />
          )}

          <FadeEffect />
        </Video>

        <Content>
          <Info item={item} type={type} />
          <Divider />

          <Casts casts={casts} />
          <Divider />

          <Trailers videos={videos} />
          <Divider />

          <section id="more">
            <Subtitle>More Like This</Subtitle>

            <List type="similar" dataType={type} id={id} />
          </section>
        </Content>
      </Right>
    </Container>
  );
}
