import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, MenuItems, MenuItem, Title, active, inactive } from './styles';

import { mediaType } from '../../apis/tmdb';

export default function NavMenu({ data, path, isActive }) {
  return (
    <Menu style={isActive ? active : inactive}>
      {path ? (
        <Title>Genres</Title>
      ) : (
        <p>{data.length ? 'Did you mean:' : null}</p>
      )}

      <MenuItems>
        {data?.slice(0, 20).map(({ name, id }) => (
          <MenuItem key={id}>
            <Link
              to={
                path
                  ? `${path}/${name
                      .replace(/&/g, 'and')
                      .replace(/\s+/g, '-')
                      .toLowerCase()}/${id}`
                  : `/${mediaType.all}/search/${name.toLowerCase()}`
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
