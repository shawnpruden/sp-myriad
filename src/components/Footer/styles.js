import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #000;
  padding: 5rem;
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
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid #ffffff80;
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
`;
