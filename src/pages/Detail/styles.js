import styled from 'styled-components';
import { bp } from 'mobile';

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
  bottom: -2px;
  left: 0;

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

  overflow: hidden;

  @media ${bp.xs}, ${bp.md} {
    position: relative;
    z-index: 5;
    top: -0.5rem;
  }

  @media ${bp.xs} {
    padding: 0;

    section:last-child {
      & > div {
        padding: 0 1rem;
      }
    }
  }

  @media ${bp.md} {
    padding: 0 1rem;

    section:last-child {
      & > div {
        overflow: hidden;
      }
    }
  }
`;

// ! Info-related
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

  @media ${bp.xs} {
    padding: 0 1rem;
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

export const Extra = styled.div`
  display: flex;
  flex-direction: ${({ isWrapped }) => isWrapped && 'column'};
  align-items: ${({ isWrapped }) => (isWrapped ? 'flex-start' : 'center')};

  margin: 0.2rem 0;

  ul {
    width: ${({ isWrapped }) => isWrapped && '100%'};
  }

  p {
    margin-left: ${({ isWrapped }) => !isWrapped && '0.5rem'};
    margin-top: ${({ isWrapped }) => isWrapped && '0.2rem'};
  }

  @media ${bp.xs}, ${bp.md} {
    flex-direction: column;
    align-items: flex-start;

    p {
      margin: 0.2rem 0 0 0;
    }
  }

  @media ${bp.xs} {
    p {
      padding: 0 1rem;
    }
  }
`;

export const Logos = styled.ul`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 60px;
    padding: 0.3rem;

    border-radius: 3px;

    aspect-ratio: 2 / 1;
    object-fit: contain;
    object-position: center;

    background-color: var(--color-white);
  }

  @media ${bp.lg} {
    li {
      opacity: 0.7;

      cursor: pointer;

      transition: 0.5s;
      &:hover {
        opacity: 1;
      }
    }
  }

  @media ${bp.xs}, ${bp.md} {
    width: 100%;

    li {
      opacity: 0.9;
    }
  }

  @media ${bp.xs} {
    padding: 0 1rem;
  }
`;

export const InfoContent = styled.main`
  ul {
    margin: 0.5rem 0;
  }

  li {
    display: inline-block;

    padding: 0.2rem 0.4rem;
    margin: 0 0.5rem 0.5rem 0;

    color: var(--color-white);
    border: 1px solid var(--color-white);
  }

  @media ${bp.xs} {
    padding: 0 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 40px;
  margin-top: 1rem;

  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-white);
  opacity: 0.8;

  border: none;
  background-color: var(--color-primary);

  cursor: pointer;

  transition: 0.5s;
  &:hover {
    opacity: 1;
  }

  svg {
    font-size: 24px;

    margin-right: 0.4rem;
  }

  @media ${bp.xs}, ${bp.md} {
    opacity: 1;
  }
`;

// ! Casts-related
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
    left: 1.5rem;

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
    display: flex;
    gap: 1rem;

    padding: 0 1rem;

    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
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
    display: inline-block;

    font-size: 1rem;

    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-gray-alt);
    font-size: 0.9rem;
  }

  @media ${bp.lg} {
    img,
    h5 {
      cursor: pointer;

      transition: 0.3s;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media ${bp.xs} {
    flex-direction: column;

    text-align: center;

    div {
      padding: 0;
      margin-top: 0.8rem;
    }

    img {
      width: 150px;
      height: 150px;
    }

    h5 {
      margin-bottom: 0.2rem;
    }

    p {
      display: flex;
      flex-direction: column;
    }

    span:first-child {
      display: none;
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

// ! Trailer-related
export const TrailerWrapper = styled.div`
  iframe {
    width: 100%;

    aspect-ratio: 16 / 9;

    margin-bottom: 4rem;
  }

  @media ${bp.xs} {
    display: flex;
    gap: 10px;

    padding: 0 1rem;

    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    iframe {
      height: ${({ isMultiple }) => isMultiple && '12rem'};

      margin-bottom: 0;
    }
  }

  @media ${bp.md} {
    iframe {
      margin-bottom: 2rem;
    }
  }
`;

export const Prompt = styled.p`
  color: var(--color-gray-alt);

  transition: 0.5s;

  @media ${bp.xs} {
    text-align: center;
  }
`;

export const Divider = styled.hr`
  margin: 2rem auto;

  background-color: #343a40;
  border: none;

  width: 100%;
  height: 1px;

  @media ${bp.xs} {
    width: calc(100% - 2rem);
  }
`;

export const grayed = {
  color: 'var(--color-black)',
  backgroundColor: 'var(--color-gray)',
};
