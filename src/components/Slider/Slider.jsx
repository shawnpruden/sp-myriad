import React, { useCallback, useEffect, useRef, useState } from 'react';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { ArrowButton, Container, glitter, Indicator } from './styles';

import SliderItem from './SliderItem';

import tmdb, { timeWindow } from '../../apis/tmdb';

const shuffle = (arr, num) =>
  arr
    .filter((item) => item.backdrop_path && item.poster_path)
    .sort(() => 0.5 - Math.random())
    .slice(0, num);

export default function Slider() {
  const [trends, setTrends] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const intervalId = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await tmdb.getTrends(timeWindow.week);

        setTrends(shuffle(results, 6));

        console.log(
          '%cLogged',
          'color: #ff5370; margin: 0.2rem',
          'at',
          new Date().toLocaleTimeString('en-US', { hour12: false }),
          '\n',
          'fetching data!!'
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSlider = useCallback(
    (direction) => {
      if (!trends.length) return;

      if (direction === 'left') {
        setSliderIndex((prevState) =>
          prevState === 0 ? trends.length - 1 : prevState - 1
        );
      } else if (direction === 'right') {
        setSliderIndex((prevState) =>
          prevState === trends.length - 1 ? 0 : prevState + 1
        );
      }

      clearInterval(intervalId.current);

      intervalId.current = setInterval(() => {
        handleSlider('right');
      }, 5000);
    },
    [trends.length]
  );

  // > autoplay
  useEffect(() => {
    intervalId.current = setInterval(() => {
      handleSlider('right');
    }, 5000);

    return () => clearInterval(intervalId.current);
  }, [handleSlider]);

  console.log(
    '%cLogged',
    'color: #ffcb6b; margin: 0.2rem',
    'at',
    new Date().toLocaleTimeString('en-US', { hour12: false }),
    '\n',
    trends
  );

  const handleIndicator = (index) => {
    setSliderIndex(index);

    handleSlider();
  };

  return (
    <Container>
      <ArrowButton direction="left" onClick={() => handleSlider('left')}>
        <BsChevronLeft />
      </ArrowButton>
      <ArrowButton direction="right" onClick={() => handleSlider('right')}>
        <BsChevronRight />
      </ArrowButton>

      {trends?.map((trend, index) => (
        <SliderItem
          key={trend.id}
          trend={trend}
          isMatched={index === sliderIndex}
          intervalId={intervalId.current}
          handleSlider={handleSlider}
        />
      ))}

      <Indicator>
        {Array(6)
          .fill()
          .map((_, index) => (
            <li
              key={index}
              onClick={() => handleIndicator(index)}
              style={index === sliderIndex ? glitter : {}}
            ></li>
          ))}
      </Indicator>
    </Container>
  );
}
