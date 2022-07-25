import styled from 'styled-components';
import { bp } from '../../mobile';

export const Container = styled.header`
  position: relative;

  width: 100vw;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

    width: 50vw;
    height: inherit;

    background: linear-gradient(
      to left,
      transparent,
      rgba(17, 17, 17, 0.8),
      #111
    );
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;

    width: 100vw;
    height: 40vh;

    background: linear-gradient(
      to bottom,
      transparent,
      rgba(17, 17, 17, 0.6),
      #111
    );
  }

  @media ${bp.xs}, ${bp.md} {
    height: 80vh;

    &::before {
      display: none;
    }

    &::after {
      bottom: -2px;

      height: 60vh;
    }
  }
`;

export const Wrapper = styled.div`
  position: absolute;

  width: inherit;
  height: inherit;
`;

export const ArrowButton = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${({ direction }) => direction === 'left' && 0};
  right: ${({ direction }) => direction === 'right' && 0};

  font-size: 3rem;
  font-weight: 300;

  width: 4rem;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.5;

  transition: 0.5s;
  &:hover {
    opacity: 1;
  }

  @media ${bp.xs} {
    display: none;
  }

  @media ${bp.md} {
    font-size: 2rem;

    width: 3rem;
  }
`;

export const Banner = styled.img`
  position: absolute;

  height: 100%;

  object-fit: cover;
  object-position: center;

  transition: 1.5s;
  opacity: 0;
  visibility: hidden;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 8rem;

  max-width: 480px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: 1.5s;
  opacity: 0;
  visibility: hidden;

  @media ${bp.xs} {
    left: 0;

    width: 100%;
    padding: 0 1rem;

    justify-content: flex-end;
  }

  @media ${bp.md} {
    top: unset;
    left: 2rem;

    max-width: 70vw;
    height: 40vh;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 1px;

  transition: 0.5s 0.3s;

  @media ${bp.xs} {
    font-size: 2rem;

    transition: none;
  }

  @media ${bp.md} {
    transition: none;
  }
`;

export const Description = styled.p`
  line-height: 1.5;

  margin: 1rem 0 2rem;

  transition: 0.5s 0.45s;

  @media ${bp.xs} {
    margin: 0.2rem 0 1.5rem;

    transition: none;
  }

  @media ${bp.md} {
    margin: 0.5rem 0 2rem;

    transition: none;
  }
`;

export const ButtonGroup = styled.div`
  transition: 0.5s 0.6s;

  @media ${bp.xs} {
    display: flex;
    justify-content: center;

    transition: none;
  }

  @media ${bp.md} {
    transition: none;
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1.8rem;
  margin-right: 1rem;

  font-size: 1rem;
  color: unset;
  text-transform: uppercase;
  letter-spacing: 1px;

  cursor: pointer;

  border: ${({ type }) =>
    type === 'trailer'
      ? '2px solid var(--color-white)'
      : '2px solid var(--color-primary)'};

  background-color: ${({ type }) =>
    type === 'trailer' ? 'rgba(0, 0, 0, 0.3)' : 'var(--color-primary)'};

  transition: 0.5s;
  &:hover {
    color: ${({ type }) => type === 'trailer' && 'var(--color-primary)'};

    border: ${({ type }) =>
      type === 'trailer' && '2px solid var(--color-primary)'};

    box-shadow: ${({ type }) =>
      type === 'trailer' && '0 0 5px var(--color-primary)'};

    filter: ${({ type }) => type !== 'trailer' && 'brightness(1.2)'};
  }

  @media ${bp.xs} {
    margin: 0 0.5rem;
  }
`;

export const Indicator = styled.ul`
  position: absolute;
  z-index: 10;
  bottom: 5rem;
  right: 2rem;

  display: inline-flex;

  li {
    position: relative;

    width: 2rem;
    height: 3px;
    margin: 0 0.5rem;

    border-radius: 50px;

    cursor: pointer;

    opacity: 0.3;
    background-color: var(--color-white);
    transition: 0.5s;
    &:hover {
      opacity: 0.6;
      transform: scale(1.2);
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 100%;
      height: 100%;

      padding: 0.3rem;
    }
  }

  @media ${bp.xs} {
    bottom: -4rem;
    left: 0;
    right: 0;

    justify-content: center;
  }

  @media ${bp.md} {
    bottom: 2rem;
  }
`;

export const glitter = {
  opacity: 1,
  transform: 'scale(1.2)',
  backgroundColor: 'var(--color-primary)',
  boxShadow: '0 0 5px 2px var(--color-primary)',
};

export const active = { opacity: 1, visibility: 'visible' };

export const inactive = { transition: 'none' };

export const forward = {
  opacity: 1,
  transform: 'translateY(0)',
};

export const backward = {
  opacity: 0,
  transform: 'translateY(-100px)',
};
