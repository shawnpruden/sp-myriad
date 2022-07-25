import styled from 'styled-components';
import { bp } from '../../mobile';

export const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000;
  padding: 5rem;

  @media ${bp.xs} {
    padding: 1.5rem;
  }

  @media ${bp.md} {
    padding: 2rem;
  }
`;

export const Button = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(-50%);

  background-color: var(--color-primary);

  padding: 0.5rem;

  cursor: pointer;

  &:hover svg {
    transition: 0.25s;
    transform: translateY(-5px);
    animation: float 1s 0.25s infinite;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.5rem;
  }

  @media ${bp.xs}, ${bp.md} {
    svg {
      font-size: 2rem;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(-5px);
    }

    50% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(-5px);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;

  width: 100%;

  @media ${bp.xs} {
    flex-direction: column;

    margin-top: 2rem;
  }

  @media ${bp.md} {
    margin-top: 2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid #ffffff80;

  @media ${bp.xs} {
    border-right: none;
    border-bottom: 1px solid #ffffff80;

    justify-content: space-around;
  }
`;

export const Menu = styled.ul`
  margin-right: 5rem;

  li {
    font-size: 0.9rem;
    margin: 1rem 0;

    cursor: pointer;

    opacity: 0.5;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }
  }

  @media ${bp.xs} {
    flex: 1;

    margin-right: 0;
    text-align: center;

    li {
      font-size: 0.7rem;
    }
  }

  @media ${bp.md} {
    margin-right: 2rem;

    li {
      font-size: 0.8rem;
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  p {
    opacity: 0.5;
    margin-bottom: 0.2rem;
  }

  @media ${bp.xs} {
    font-size: 0.7rem;
  }

  @media ${bp.md} {
    font-size: 0.8rem;

    justify-content: space-evenly;

    p {
      padding: 0 1rem;
    }
  }
`;

export const Icons = styled.div`
  font-size: 1.5rem;

  svg {
    margin: 0 1rem;

    cursor: pointer;

    opacity: 0.5;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }
  }

  @media ${bp.xs} {
    margin: 1rem 0 0.5rem;
  }
`;
