import React from 'react';

import styled from 'styled-components';
const Spinner = styled.div`
  display: inline-block;

  width: ${({ size }) => size}px;

  aspect-ratio: 1;

  border-radius: 50%;

  background: ${({
    color,
    width,
  }) => `radial-gradient(farthest-side, ${color} 94%, #0000)
      top/${width}px ${width}px no-repeat,
    conic-gradient(#0000 30%, ${color})`};

  -webkit-mask: ${({
    width,
  }) => `radial-gradient(farthest-side, #0000 calc(100% - ${width}px), #000 0);
  animation: loader 1s infinite linear`};

  @keyframes loader {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export function Loader({
  size = 50,
  color = 'var(--color-primary)',
  width = 8,
}) {
  return <Spinner size={size} color={color} width={width} />;
}
