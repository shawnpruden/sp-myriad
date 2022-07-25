import styled from 'styled-components';
import { bp } from '../../mobile';

export const Container = styled.div`
  display: flex;

  width: 100vw;
  padding: 0 6rem 5rem;

  @media ${bp.xs} {
    padding: 0 0 3rem;
  }

  @media ${bp.md} {
    padding: 0 1rem 3rem;
  }
`;

export const Left = styled.div`
  flex: 1;

  position: sticky;
  top: 2rem;

  height: 100%;
  margin-top: 6rem;

  @media ${bp.xs} {
    display: none;
  }
`;

export const Frame = styled.div`
  position: relative;

  width: 90%;

  img {
    object-fit: cover;
    object-position: center;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0.5rem;
    left: 0.5rem;

    width: 100%;
    height: 100%;

    background-color: var(--color-primary);
  }
`;

export const Catalog = styled.ul`
  margin-top: 2rem;
  padding-left: 1.5rem;

  a {
    display: inline-block;

    margin: 0.5rem 0;

    color: var(--color-gray-alt);
    font-size: 1.1rem;

    cursor: pointer;

    transition: 0.5s;
    &:hover {
      color: var(--color-white);
    }
  }

  i {
    font-size: 0.8rem;

    margin-right: 0.2rem;

    opacity: 0;
  }

  .active {
    color: var(--color-white);

    i {
      color: var(--color-primary);

      opacity: 1;
    }
  }

  @media ${bp.md} {
    a {
      font-size: 0.9rem;
    }

    i {
      font-size: 0.6rem;
    }
  }
`;

export const Right = styled.div`
  flex: 3;

  position: relative;

  overflow: hidden;
`;

export const FadeEffect = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 40%;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(17, 17, 17, 0.6),
    #111
  );

  transition: 0.5s;
`;

export const Video = styled.div`
  position: relative;

  padding-top: 4rem;

  iframe,
  img {
    width: 100%;

    aspect-ratio: 16 / 9;
  }

  img {
    object-fit: cover;
    object-position: center;
  }

  &:hover ${FadeEffect} {
    opacity: 0;
    visibility: hidden;
  }

  @media ${bp.xs} {
    padding-top: 40px;
  }
`;

export const Content = styled.div`
  padding: 0 2rem;

  @media ${bp.xs}, ${bp.md} {
    position: relative;
    z-index: 5;
    top: -0.5rem;

    padding: 0 1rem;
  }
`;

// * Info-related
export const InfoWrapper = styled.section`
  color: var(--color-gray-alt);
  font-size: 0.9rem;

  p {
    line-height: 1.4;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${bp.xs}, ${bp.md} {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h4`
  color: var(--color-white);
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media ${bp.xs}, ${bp.md} {
    align-self: flex-start;

    font-size: 1.8rem;
  }
`;

export const Rate = styled.h3`
  display: flex;
  align-items: center;

  color: var(--color-primary);
  font-size: 3rem;

  svg {
    font-size: 1.5rem;
    margin: 0 0.4rem;
  }

  @media ${bp.xs}, ${bp.md} {
    font-size: 2rem;

    svg {
      font-size: 1.2rem;
    }
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: center;

  margin: 0.2rem 0 0.5rem;

  @media ${bp.xs}, ${bp.md} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Networks = styled.ul`
  display: flex;
  align-items: center;
`;

export const Logo = styled.li`
  margin-right: 0.5rem;

  img {
    width: 50px;
    padding: 0.3rem;

    border-radius: 3px;

    background-color: var(--color-white);
  }

  @media ${bp.xs}, ${bp.md} {
    margin-bottom: 0.5rem;
  }
`;

export const InfoContent = styled.div`
  span:last-child {
    text-transform: uppercase;
  }
`;

export const Note = styled.p`
  color: var(--color-primary);
`;

export const Genres = styled.ul`
  margin: 0.5rem 0;

  li {
    display: inline-block;

    padding: 0.2rem 0.4rem;
    margin: 0 0.5rem 0.5rem 0;

    color: var(--color-white);
    border: 1px solid var(--color-white);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 135px;
  height: 40px;
  margin-top: 1rem;

  color: var(--color-white);
  opacity: 0.8;

  border: none;
  background-color: var(--color-primary);

  cursor: pointer;

  transition: 0.5s;
  &:hover {
    opacity: 1;
  }

  @media ${bp.xs}, ${bp.md} {
    opacity: 1;
  }
`;

// * Casts-related
export const Subtitle = styled.h3`
  position: relative;

  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;

  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.6rem;

    width: 3px;
    height: 100%;

    border-radius: 50px;
    background-color: var(--color-primary);
  }

  @media ${bp.xs} {
    left: 1rem;

    margin-bottom: 1.5rem;
  }

  @media ${bp.md} {
    font-size: 1.4rem;

    margin-bottom: 1.5rem;
  }
`;

export const CastsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media ${bp.xs} {
    grid-template-columns: 1fr;

    padding-left: 1rem;
  }

  @media ${bp.md} {
    column-gap: 1rem;
  }
`;

export const GridItem = styled.li`
  display: flex;

  div {
    padding: 2rem 0 0 2rem;
  }

  img {
    width: 120px;
    height: 120px;

    aspect-ratio: 1;

    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  h5 {
    font-size: 1rem;

    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-gray-alt);
    font-size: 0.9rem;
  }

  @media ${bp.xs} {
    div {
      padding: 1.2rem 0 0 2rem;
    }

    img {
      width: 100px;
      height: 100px;
    }
  }

  @media ${bp.md} {
    div {
      padding: 0.8rem 0 0 1rem;
    }

    img {
      width: 80px;
      height: 80px;
    }

    h5 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

// * Trailer-related
export const TrailerWrapper = styled.div`
  iframe {
    width: 100%;

    aspect-ratio: 16 / 9;

    margin-bottom: 4rem;
  }

  @media ${bp.xs} {
    iframe {
      margin-bottom: 1rem;
    }
  }

  @media ${bp.md} {
    iframe {
      margin-bottom: 2rem;
    }
  }
`;

export const Divider = styled.hr`
  margin: 2rem 0;

  background-color: #343a40;
  border: none;

  width: 100%;
  height: 1px;
`;

export const grayed = {
  color: 'var(--color-black)',
  backgroundColor: 'var(--color-gray)',
};
