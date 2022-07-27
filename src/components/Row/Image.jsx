import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Thumbnail = styled.img`
  object-fit: contain;
  object-position: center;

  aspect-ratio: 3 / 1;
`;

export default function Image({ item: { id, name, logo } }) {
  return (
    <Link to={`/networks/${name.replace(/\s+/g, '-').toLowerCase()}/${id}`}>
      <Thumbnail src={logo} alt={name} />
    </Link>
  );
}
