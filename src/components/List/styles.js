import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  display: inline-block;

  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const Underline = styled.div`
  width: 50%;
  height: 4px;
  background-color: var(--color-primary);
  border-radius: 5px;

  margin-top: 0.5rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;
  border: none;
  background-color: transparent;

  font-size: 1rem;
  color: unset;

  transition: 0.5s;
  &:hover {
    color: var(--color-primary);
  }

  svg {
    font-size: 0.8rem;

    margin-left: 0.2rem;
  }
`;

export const Wrapper = styled.div`
  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    width: ${({ type }) => (type === 'similar' ? '25%' : '18%')};
  }

  .swiper-button-next {
    color: var(--color-white);
    opacity: 0.8;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }

    right: ${({ type }) => (type === 'similar' ? '-1vw' : '-1rem')};
  }

  .swiper-button-prev {
    color: var(--color-white);
    opacity: 0.8;

    transition: 0.5s;
    &:hover {
      opacity: 1;
    }

    left: ${({ type }) => (type === 'similar' ? 0 : '-7rem')};
  }

  .swiper-button-disabled {
    opacity: 0;
  }
`;
