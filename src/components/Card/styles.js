import styled from 'styled-components';
import { bp } from '../../mobile';

export const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  opacity: 0;
  visibility: hidden;

  overflow-y: auto;
`;

export const Container = styled.div`
  position: relative;

  cursor: pointer;

  @media ${bp.lg} {
    transition: 0.5s;
    &:hover {
      z-index: 5;
      transform: scale(1.2);
    }

    &:hover ${Details} {
      transition: 0.5s 0.6s;

      z-index: 10;

      opacity: 1;
      visibility: visible;
    }

    &::before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      background-color: #000;

      opacity: 0;
      transform: scale(0);
    }

    &:hover::before {
      transition: 0.5s 0.3s;

      z-index: 5;
      opacity: 0.9;
      transform: scale(1);
    }
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
`;

export const Thumbnail = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 40%;
    height: 100%;

    background: linear-gradient(
      to left,
      transparent,
      rgba(17, 17, 17, 0.6),
      #111
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 40%;

    background: linear-gradient(
      to bottom,
      transparent,
      rgba(17, 17, 17, 0.6),
      #111
    );
  }

  img {
    object-fit: cover;
    object-position: center;
  }
`;

export const Content = styled.div`
  padding: 0 1rem 1rem;

  line-height: 1.4;
`;

export const Rate = styled.h3`
  display: flex;
  align-items: center;

  position: absolute;
  z-index: 2;
  bottom: -0.5rem;
  right: 1rem;

  color: var(--color-primary);
  font-size: 1.8rem;

  svg {
    font-size: 1rem;
    margin: 0 0.2rem;
  }
`;

export const Title = styled.h5`
  margin-top: 0.5rem;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
`;

export const Info = styled.div`
  color: var(--color-gray-alt);
  line-height: 1;

  margin-bottom: 1rem;

  span {
    font-size: 0.7rem;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.4;

    margin-top: 0.4rem;
  }
`;

export const Anchor = styled.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  cursor: pointer;

  padding-bottom: 0.1rem;

  background: linear-gradient(currentColor 0 0) var(--p, 0%) 100% / var(--d, 0)
    2px no-repeat;

  transition: 0.3s, background-position 0s 0.3s;
  &:hover {
    --d: 100%;
    --p: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  padding: 0.2rem;

  cursor: pointer;

  opacity: 0.8;
  border: 1px solid var(--color-white);
  background-color: transparent;

  color: var(--color-white);

  transition: 0.5s;
  &:hover {
    opacity: 1;

    box-shadow: 0 0 5px var(--color-white);
  }
`;

export const spaced = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
