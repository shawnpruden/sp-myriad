import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import { MdPlaylistAddCheck, MdPlaylistAdd } from 'react-icons/md';

import {
  Button,
  grayed,
  Header,
  InfoContent,
  Extra,
  InfoWrapper,
  Logos,
  Rate,
  Title,
} from './styles';

import { Loader } from 'components/Loader';
import { useList, useUpdate } from 'hooks';

const convert = (mins) => `${Math.trunc(mins / 60)}h ${mins % 60}m`;

export default function Info({ item, type }) {
  const navigate = useNavigate();

  const { isAdded, isLoading, handleList } = useList(item, type);
  const update = useUpdate();

  const runtime = convert(item.runtime);

  const info = [
    !!(item.release_date || item.first_air_date) &&
      new Date(item.release_date || item.first_air_date).getFullYear(),

    !!item.runtime && runtime,

    !!item.number_of_seasons &&
      (item.number_of_seasons === 1
        ? `${item.number_of_seasons} SEASON`
        : `${item.number_of_seasons} SEASONS`),
  ]
    .filter((data) => !!data)
    .join(' · ');

  const data = (() => {
    if (!!item.networks?.length)
      return {
        logos: item.networks.filter(
          ({ id, logo_path, name }) => id && logo_path && name
        ),
        path: 'networks',
      };
    if (!!item.production_companies?.length)
      return {
        logos: item.production_companies.filter(
          ({ id, logo_path, name }) => id && logo_path && name
        ),
        path: 'companies',
      };

    return { logos: [] };
  })();
  const { logos, path } = data;

  return (
    <InfoWrapper id="overview">
      <Header>
        <Title>
          {item.title || item.original_title || item.name || item.original_name}
        </Title>

        {!!item.vote_average && (
          <Rate>
            <FaStar />
            {Math.round(item.vote_average * 10) / 10}
          </Rate>
        )}
      </Header>

      {!!logos?.length && (
        <Logos isWrapped={!logos?.length || logos?.length > 5}>
          {logos.map(({ id, logo_path, name }) => (
            <li
              key={id}
              onClick={() =>
                navigate(
                  `/${path}/${name.replace(/\s+/g, '-').toLowerCase()}/${id}`
                )
              }
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${logo_path}?${Date.now()}`}
                alt=""
                onError={logo_path && update}
              />
            </li>
          ))}
        </Logos>
      )}

      <Extra isWrapped={!logos?.length || logos?.length > 5}>
        <span>{info}</span>

        {!!item.spoken_languages?.length && (
          <span style={{ textTransform: 'uppercase' }}>
            <span> · </span>
            {item.spoken_languages
              .map((language) => language.iso_639_1)
              .join(', ')}
          </span>
        )}
      </Extra>

      <InfoContent>
        {item.next_episode_to_air && (
          <p style={{ color: 'var(--color-primary)' }}>
            {`Upcoming Episode:
          ${item.next_episode_to_air.name} (EP ${
              item.next_episode_to_air.episode_number
            }) -

          ${new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
          }).format(new Date(item.next_episode_to_air.air_date))},

          ${new Intl.DateTimeFormat('en-US', {
            month: 'short',
          }).format(new Date(item.next_episode_to_air.air_date))}

          ${new Date(item.next_episode_to_air.air_date).getDate()},

          ${new Date(item.next_episode_to_air.air_date).getFullYear()}`}
          </p>
        )}

        {!item.next_episode_to_air && item.last_episode_to_air && (
          <p style={{ color: 'var(--color-primary)' }}>
            {`Previous Episode:
          ${item.last_episode_to_air.name} (EP ${
              item.last_episode_to_air.episode_number
            }) -

          ${new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
          }).format(new Date(item.last_episode_to_air.air_date))},

          ${new Intl.DateTimeFormat('en-US', {
            month: 'short',
          }).format(new Date(item.last_episode_to_air.air_date))}

          ${new Date(item.last_episode_to_air.air_date).getDate()},

          ${new Date(item.last_episode_to_air.air_date).getFullYear()}`}
          </p>
        )}

        {!!item.genres?.length && (
          <ul>
            {item.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}

        {item.overview && <p>{item.overview}</p>}

        <Button onClick={(e) => handleList(e)} style={isAdded ? grayed : {}}>
          {isLoading ? (
            <Loader size={20} color="var(--color-white)" width={2} />
          ) : (
            <>
              {isAdded ? (
                <>
                  <MdPlaylistAddCheck /> Added
                </>
              ) : (
                <>
                  <MdPlaylistAdd /> Add
                </>
              )}
            </>
          )}
        </Button>
      </InfoContent>
    </InfoWrapper>
  );
}
