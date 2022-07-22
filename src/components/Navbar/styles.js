import styled from 'styled-components';

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
`;

export const Left = styled.div`
  display: flex;

  height: 100%;
`;

export const Logo = styled.h1`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-family: var(--font-secondary);
  letter-spacing: 2px;
  text-transform: uppercase;

  user-select: none;
`;

export const NavItems = styled.ul`
  display: flex;

  margin-left: 1.5rem;
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
`;

export const Center = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
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
`;

export const Right = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  color: var(--color-gray);
  font-size: 1rem;

  border: none;
  border-radius: 5px;
  background-color: transparent;

  cursor: pointer;

  transition: 0.5s;
  &:hover {
    color: var(--color-white);

    background-color: #ffffff33;
  }

  svg {
    margin-right: 0.5rem;
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
  width: 120,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
