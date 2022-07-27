import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { bp } from '../../mobile';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation } from 'swiper';

import { useMedia } from '../../hooks';

export const Container = styled.div`
  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    padding: 1rem;

    background-color: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 0 10px var(--color-white);

    opacity: 0.5;

    cursor: pointer;

    transition: 0.5s;
    &:hover {
      opacity: 1;

      box-shadow: 0 0 10px 4px var(--color-primary);
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.5rem;
  }

  .swiper-button-next {
    color: var(--color-white);
    opacity: 0.8;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }

    right: -1rem;
  }

  .swiper-button-prev {
    color: var(--color-white);
    opacity: 0.8;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }

    left: -7rem;
  }

  .swiper-button-disabled {
    opacity: 0;
  }

  @media ${bp.xs}, ${bp.md} {
    .swiper-slide {
      box-shadow: 0 0 5px var(--color-white);

      opacity: 0.8;

      transition: none;
      &:hover {
        box-shadow: 0 0 5px 2px var(--color-primary);
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

export const Image = styled.img`
  object-fit: contain;
  object-position: center;

  aspect-ratio: 3 / 1;
`;

const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

export default function Row({ rowData }) {
  const navigate = useNavigate();

  const { xs } = useMedia();

  const rowItems = useMemo(() => shuffle(rowData), [rowData]);

  return (
    <Container>
      <Swiper
        modules={[FreeMode, Mousewheel, Navigation]}
        freeMode={true}
        navigation={true}
        mousewheel={{ forceToAxis: true }} // > disable swipe on y-axis
        spaceBetween={xs ? 10 : 20}
        slidesPerView={xs ? 3 : 6}
        slidesPerGroup={6}
      >
        {rowItems.map(({ id, name, logo }) => (
          <SwiperSlide
            key={id}
            onClick={() =>
              navigate(
                `/networks/${name.replace(/\s+/g, '-').toLowerCase()}/${id}`
              )
            }
          >
            <Image src={logo} alt={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
