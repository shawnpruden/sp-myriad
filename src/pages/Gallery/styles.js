import styled from 'styled-components';
import { bp } from 'mobile';

export const Header = styled.header`
  position: relative;

  width: 100vw;
  height: 40vh;

  img {
    width: inherit;
    height: inherit;

    object-fit: cover;
    object-position: center;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;

    width: inherit;
    height: 50%;

    background: linear-gradient(
      to bottom,
      transparent,
      rgba(17, 17, 17, 0.6),
      #111
    );
  }

  @media ${bp.xs}, ${bp.md} {
    height: 30vh;
  }
`;

export const Container = styled.section`
  padding: 0 8rem 6rem;

  @media ${bp.xs} {
    padding: 0 1rem 6rem;
  }

  @media ${bp.md} {
    padding: 0 2rem 6rem;
  }
`;

export const Title = styled.h3`
  position: relative;

  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: ${({ type }) => {
    switch (type) {
      case 'all':
        return;

      case 'networks':
        return 'uppercase';

      case 'companies':
        return 'uppercase';

      default:
        return 'capitalize';
    }
  }};

  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.8rem;

    width: 3px;
    height: 100%;

    border-radius: 50px;
    background-color: var(--color-primary);
  }

  @media ${bp.xs} {
    left: 1rem;

    font-size: 1.5rem;

    margin-bottom: 1rem;
  }

  @media ${bp.md} {
    margin-bottom: 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media ${bp.xs} {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 0.5rem;
  }

  @media ${bp.md} {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 1rem;
  }
`;

export const Button = styled.button`
  margin: 3rem auto 0;
  display: block;
  text-align: center;

  padding: 0.6rem 1.8rem;
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--color-primary);

  cursor: pointer;

  color: var(--color-primary);
  font-size: 1rem;
  letter-spacing: 1px;

  background: linear-gradient(var(--color-primary) 0 0) right / 0% no-repeat;

  transition: 0.5s, background-position 0s;
  &:hover {
    color: var(--color-white);
    background-position: left;
    background-size: 100%;
  }

  @media ${bp.xs} {
    margin: 1.5rem auto 0;
  }

  @media ${bp.xs}, ${bp.md} {
    transition: none;
  }
`;
