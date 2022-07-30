import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation } from 'swiper';

import { bp } from 'mobile';
import { useMedia } from 'hooks';

import styled from 'styled-components';
const Container = styled.div`
  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    padding: 1rem;

    background-color: var(--color-white);
    border-radius: 5px;

    cursor: pointer;

    width: auto;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.5rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-white);
    opacity: 0.8;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }
  }

  .swiper-button-next {
    right: -1rem;
  }

  .swiper-button-prev {
    left: -7rem;
  }

  .swiper-button-disabled {
    opacity: 0;
  }

  @media ${bp.lg} {
    .swiper-slide {
      box-shadow: 0 0 10px var(--color-white);

      opacity: 0.6;

      transition: 0.5s;
      &:hover {
        box-shadow: 0 0 10px 5px var(--color-primary);

        opacity: 1;
      }
    }
  }

  @media ${bp.xs}, ${bp.md} {
    .swiper-slide {
      box-shadow: 0 0 5px var(--color-white);
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

const Image = styled.img`
  object-fit: contain;
  object-position: center;

  aspect-ratio: 3 / 1;
`;

const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

export default function Row({ rowData }) {
  const navigate = useNavigate();

  const { xs, md } = useMedia();

  const space = (() => {
    if (xs) return 10;
    if (md) return 15;

    return 20;
  })();

  const rowItems = useMemo(() => shuffle(rowData), [rowData]);

  return (
    <Container>
      <Swiper
        modules={[FreeMode, Mousewheel, Navigation]}
        freeMode={true}
        navigation={true}
        mousewheel={{ forceToAxis: true }} // > disable swipe on y-axis
        spaceBetween={space}
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
