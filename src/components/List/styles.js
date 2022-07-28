import styled from 'styled-components';
import { bp } from '../../mobile';

export const Container = styled.div`
  margin-bottom: 5rem;

  @media ${bp.xs}, ${bp.md} {
    margin-bottom: 3rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  @media ${bp.xs}, ${bp.md} {
    margin-bottom: 0.8rem;
  }
`;

export const Title = styled.h3`
  display: inline-block;

  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;

  @media ${bp.xs} {
    font-size: 1.2rem;
  }
`;

export const Underline = styled.div`
  width: 50%;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 5px;

  margin-top: 0.5rem;

  @media ${bp.xs} {
    height: 2px;
    margin-top: 0.2rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;
  border: none;
  background-color: transparent;

  font-size: 1rem;
  color: unset;
  opacity: 0.6;

  transition: 0.5s;
  &:hover {
    color: var(--color-primary);
  }

  svg {
    font-size: 0.8rem;

    margin-left: 0.2rem;
  }

  @media ${bp.xs} {
    font-size: 0.8rem;

    svg {
      font-size: 0.6rem;
    }
  }
`;

export const Wrapper = styled.div`
  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    width: ${({ type }) => (type === 'similar' ? '25%' : '18%')};
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
    left: ${({ type }) => (type === 'similar' ? '-1rem' : '-7rem')};
  }

  .swiper-button-disabled {
    opacity: 0;
  }

  @media ${bp.xs}, ${bp.md} {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }

  @media ${bp.xs} {
    .swiper-slide {
      width: 30%;
    }
  }

  @media ${bp.md} {
    .swiper-slide {
      width: 22%;
    }
  }
`;
