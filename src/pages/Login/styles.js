import styled from 'styled-components';
import { bp } from 'mobile';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;

  @media ${bp.xs} {
    margin-top: 3rem;
  }

  @media ${bp.md} {
    margin-top: 6rem;
  }
`;

export const Logo = styled.h1`
  display: inline-block;

  margin-top: 2rem;

  color: var(--color-primary);
  font-size: 3rem;
  font-family: var(--font-secondary);
  letter-spacing: 3px;
  text-transform: uppercase;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 500px;
  padding: 0 3rem;

  transition: 0.5s;

  text-align: center;

  @media ${bp.xs} {
    width: 100%;
    padding: 0 1.5rem;
  }

  @media ${bp.md} {
    padding: 0;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  text-align: start;

  margin: 3rem 0 2rem;
`;

export const Text = styled.p`
  text-align: start;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  color: ${({ type }) =>
    type === 'error' ? 'var(--color-red)' : 'var(--color-green)'};
  text-align: start;

  padding: 0.8rem 1.2rem;
  margin-bottom: 1rem;

  border-radius: 5px;
  border: ${({ type }) =>
    type === 'error'
      ? '2px solid var(--color-red)'
      : '2px solid var(--color-green)'};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: ${({ type }) =>
    type === 'submit' || type === 'button'
      ? '2px solid var(--color-primary)'
      : '2px solid var(--color-gray-alt)'};

  background-color: ${({ type }) =>
    type === 'submit' ? 'var(--color-primary)' : 'transparent'};

  font-size: 1.1rem;
  color: ${({ type }) =>
    type === 'button' ? 'var(--color-primary)' : 'var(--color-white)'};
  letter-spacing: ${({ type }) => type === 'submit' && '1px'};

  padding: 0.8rem 1.2rem;

  cursor: ${({ type }) => type === 'button' && 'pointer'};

  transition: 0.5s;
  &:hover,
  &:focus {
    border: ${({ type }) =>
      type === 'submit' || type === 'button'
        ? null
        : '2px solid var(--color-white)'};

    filter: ${({ type }) => type === 'submit' && 'brightness(1.2)'};

    box-shadow: ${({ type }) =>
      type === 'button' && '0 0 10px var(--color-primary)'};
    text-shadow: ${({ type }) =>
      type === 'button' && '0 0 10px var(--color-primary)'};
  }

  animation: loader 1s infinite linear;

  @keyframes loader {
    0% {
      background-position: right;
    }
  }
`;

export const Error = styled.p`
  color: var(--color-red);
  font-size: 0.8rem;
  text-align: start;

  margin: 0.4rem 0 0.8rem;

  transition: 0.5s;
`;

export const Divider = styled.p`
  margin: 1rem 0;

  span {
    position: relative;
  }

  span::before,
  span::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 10rem;
    height: 1px;

    background-color: #343a40;
  }

  span::before {
    right: 100%;
    margin-right: 1rem;
  }

  span::after {
    left: 100%;
    margin-left: 1rem;
  }

  @media ${bp.xs} {
    span::before,
    span::after {
      width: 8rem;
    }
  }

  @media ${bp.md} {
    span::before,
    span::after {
      width: 12rem;
    }
  }
`;

export const Option = styled.p`
  color: var(--color-gray-alt);
  text-align: center;

  margin-top: 1.5rem;

  button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;

    font-size: 1rem;
    font-style: italic;
    color: var(--color-primary);

    transition: 0.5s;
    &:hover {
      border-bottom: 1px solid var(--color-primary);
    }
  }
`;

export const visible = {
  opacity: 1,
  visibility: 'visible',
};

export const invisible = {
  opacity: 0,
  visibility: 'hidden',
};

export const upwards = {
  transform: 'translateY(0)',
  opacity: 1,
};

export const downwards = {
  transform: 'translateY(100px)',
  opacity: 0,
};
