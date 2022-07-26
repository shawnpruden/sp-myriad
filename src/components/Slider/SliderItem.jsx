import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  active,
  backward,
  Banner,
  Button,
  ButtonGroup,
  Content,
  Description,
  forward,
  inactive,
  Title,
  Wrapper,
} from './styles';

import tmdb from 'apis/tmdb';

import Modal from '../Modal/Modal';
import { useMedia, useUpdate } from 'hooks';

const truncate = (str, num) =>
  str?.length > num ? str.slice(0, num - 1) + '...' : str;

export default function SliderItem({
  trend,
  isMatched,
  intervalId,
  handleSlider,
}) {
  // > modal-related
  const [isActive, setIsActive] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const [videoSrc, setVideoSrc] = useState('');
  const navigate = useNavigate();

  const { xs } = useMedia();
  const update = useUpdate();

  const handleFetchVideos = async (type, id) => {
    try {
      const { results } = await tmdb.getVideos(type, id);

      if (results.length) {
        setVideoSrc(
          `https://www.youtube.com/embed/${results[0].key}?autoplay=1&rel=0&modestbranding=1`
        );
      } else {
        setIsAvailable(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrailer = () => {
    setIsActive(true);
    !videoSrc.length && handleFetchVideos(trend.media_type, trend.id);

    clearInterval(intervalId);
  };

  return (
    <Wrapper>
      <Modal
        isActive={isActive}
        handleClose={() => setIsActive(false)}
        handleSlider={handleSlider}
      >
        {isAvailable ? (
          <iframe
            title="trailer"
            src={isActive ? videoSrc : ''}
            allow="fullscreen"
          ></iframe>
        ) : (
          <h3>No trailer available.</h3>
        )}
      </Modal>

      <Banner
        src={
          xs
            ? `https://image.tmdb.org/t/p/w500${
                trend.poster_path
              }?${Date.now()}`
            : `https://image.tmdb.org/t/p/original${
                trend.backdrop_path
              }?${Date.now()}`
        }
        alt={
          trend.title ||
          trend.original_title ||
          trend.name ||
          trend.original_name
        }
        style={isMatched ? active : inactive}
        onError={(trend.backdrop_path || trend.poster_path) && update}
      />

      <Content style={isMatched ? active : inactive}>
        <Title style={isMatched ? forward : backward}>
          {trend.title ||
            trend.original_title ||
            trend.name ||
            trend.original_name}
        </Title>

        <Description style={isMatched ? forward : backward}>
          {xs ? truncate(trend.overview, 150) : truncate(trend.overview, 250)}
        </Description>

        <ButtonGroup style={isMatched ? forward : backward}>
          <Button onClick={() => navigate(`/${trend.media_type}/${trend.id}`)}>
            Watch now
          </Button>

          <Button type="trailer" onClick={handleTrailer}>
            Trailer
          </Button>
        </ButtonGroup>
      </Content>
    </Wrapper>
  );
}
