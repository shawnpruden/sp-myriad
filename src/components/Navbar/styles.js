import styled from 'styled-components';
import { bp } from 'mobile';

export const Container = styled.nav`
  position: fixed;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 56px;
  padding: 0 3rem;

  background-color: rgba(0, 0, 0, 0.5);

  transition: 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
  }

  @media ${bp.xs} {
    padding: 0 1rem;
    height: 40px;

    background-color: #000;
  }

  @media ${bp.md} {
    padding: 0 2rem;

    background-color: #000;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`;

export const Logo = styled.h1`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-family: var(--font-secondary);
  letter-spacing: 2px;
  text-transform: uppercase;

  user-select: none;

  @media ${bp.xs} {
    font-size: 1.5rem;
  }
`;

export const NavItems = styled.ul`
  display: flex;

  margin-left: 1.5rem;

  @media ${bp.xs}, ${bp.md} {
    margin-left: 1rem;
  }
`;

export const NavItem = styled.li`
  position: relative;
  z-index: 3;

  display: flex;
  align-items: center;

  & > a {
    padding: 0.2rem;
    margin: 0 1.5rem;

    color: var(--color-gray);

    background: linear-gradient(var(--color-primary) 0 0) bottom / var(--d, 0)
      2px no-repeat;

    transition: 0.5s;
    &:hover {
      color: var(--color-primary);

      --d: 100%;
    }
  }

  @media ${bp.xs} {
    & > span {
      margin: 0 0.5rem;

      font-size: 0.8rem;
      color: var(--color-gray);
    }
  }

  @media ${bp.md} {
    & > span {
      margin: 0 0.5rem;

      color: var(--color-gray);
    }
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  @media ${bp.xs} {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;

    justify-content: center;

    width: 100vw;
    height: 56px;

    background-color: #000;

    opacity: 0;
    visibility: hidden;
  }
`;

export const SearchBar = styled.form`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;

  border-radius: 50px;
  box-shadow: 0 0 5px var(--color-white);

  padding: 0.3rem;

  opacity: 0.8;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }

  svg {
    color: var(--color-gray);
    font-size: 1.5rem;

    margin-right: 0.4rem;

    transition: 0.5s;
  }

  @media ${bp.xs} {
    width: 80%;
    z-index: 5;

    justify-content: space-between;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: inherit;

  color: var(--color-white);
  font-size: 1rem;

  margin-left: 0.8rem;

  &::placeholder {
    color: var(--color-gray);
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  @media ${bp.xs} {
    width: 100%;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  & > div {
    width: 120px;
  }

  @media ${bp.xs} {
    justify-content: flex-end;

    & > div {
      width: 20px;

      margin-left: 0.5rem;
    }
  }

  @media ${bp.md} {
    & > div {
      width: 100px;

      margin-left: 0.5rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  color: var(--color-gray);
  font-size: 1rem;

  border: none;

  background-color: transparent;

  cursor: pointer;

  transition: 0.5s;
  &:hover {
    color: var(--color-white);

    background-color: #ffffff33;
  }

  svg {
    font-size: 24px;

    margin-right: ${({ type }) => (type === 'watchlist' ? '0.2rem' : '0.5rem')};
  }

  @media ${bp.xs} {
    padding: 0;

    span {
      display: none;
    }

    svg {
      font-size: 20px;

      margin: 0;
    }
  }

  @media ${bp.md} {
    padding: 0;

    span {
      display: ${({ type }) => type === 'watchlist' && 'none'};
    }

    svg {
      margin: ${({ type }) => type === 'watchlist' && 0};
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  z-index: 2;
  top: 100%;

  width: 30vw;
  height: 40vh;
  padding: 1rem;

  transition: 0.5s;

  &::before {
    content: '';
    position: fixed;
    z-index: -1;
    top: 56px;
    left: 0;

    width: 100vw;
    height: 45vh;

    background-color: #000;
  }

  @media ${bp.xs}, ${bp.md} {
    height: 300px;

    &::before {
      height: 350px;
    }
  }

  @media ${bp.xs} {
    position: fixed;
    top: 40px;
    left: 0;

    width: 100vw;
    padding: 1.5rem 3rem;

    &::before {
      top: ${({ type }) => (type === 'search' ? '56px' : '40px')};
    }
  }

  @media ${bp.md} {
    width: 40vw;
    padding: ${({ type }) => (type === 'search' ? '1rem 0' : '2rem 0 1rem')};
  }
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: normal;
`;

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 100%;
  margin-top: 1rem;
`;

export const MenuItem = styled.li`
  width: 50%;
  margin-bottom: 0.5rem;

  & > a {
    font-size: 0.8rem;

    opacity: 0.5;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }
  }
`;

export const active = {
  opacity: 1,
  visibility: 'visible',
};

export const inactive = {
  opacity: 0,
  visibility: 'hidden',
};

export const centralized = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const xsIcon = {
  fontSize: '20px',
  marginRight: '1rem',
  color: 'var(--color-gray)',
};
