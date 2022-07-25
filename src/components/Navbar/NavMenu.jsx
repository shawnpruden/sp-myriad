import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, MenuItems, MenuItem, Title, active, inactive } from './styles';

import { mediaType } from '../../apis/tmdb';

export default function NavMenu({ data, path, isActive, type }) {
  return (
    <Menu type={type} style={isActive ? active : inactive}>
      {type === 'search' ? (
        <p>{data.length ? 'Did you mean:' : null}</p>
      ) : (
        <Title>Genres</Title>
      )}

      <MenuItems>
        {data?.slice(0, 20).map(({ name, id }) => (
          <MenuItem key={id}>
            <Link
              to={
                type === 'search'
                  ? `/${mediaType.all}/search/${name.toLowerCase()}`
                  : `${path}/${name
                      .replace(/&/g, 'and')
                      .replace(/\s+/g, '-')
                      .toLowerCase()}/${id}`
              }
            >
              {name}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
