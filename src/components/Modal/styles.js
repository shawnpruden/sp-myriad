import styled from 'styled-components';
import { bp } from '../../mobile';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow: auto;

  background: rgba(0, 0, 0, 0.75);

  transition: 0.3s;
`;

export const XButton = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;

  font-size: 1.5rem;

  cursor: pointer;

  opacity: 0;

  transition: 0.5s;
  &:hover {
    color: var(--color-primary);
  }
`;

export const Content = styled.div`
  position: relative;

  --w: 60vw;
  width: var(--w);
  height: calc((var(--w) / 16) * 9);

  background-color: var(--color-black);
  box-shadow: 0 0 10px var(--color-primary);

  transition: 0.6s;
  transform: translateY(-250px);

  &:hover ${XButton} {
    opacity: 1;
  }

  iframe {
    width: 100%;
    height: calc((var(--w) / 16) * 9);
  }

  h3 {
    font-size: calc(var(--w) / 20);
    letter-spacing: 1px;
    text-align: center;

    padding-top: 20%;
  }

  @media ${bp.xs}, ${bp.md} {
    --w: 90vw;
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
