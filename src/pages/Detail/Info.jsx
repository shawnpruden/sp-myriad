import React from 'react';

import { FaStar } from 'react-icons/fa';

import {
  Button,
  Genre,
  grayed,
  Header,
  InfoContent,
  InfoGroup,
  InfoWrapper,
  Logo,
  Networks,
  Note,
  Rate,
  Title,
} from './styles';

import { Loader } from '../../components/Loader';

import { useList, useUpdate } from '../../hooks';

const convert = (mins) => `${Math.trunc(mins / 60)}h ${mins % 60}m`;

export default function Info({ item, type }) {
  const { isAdded, isLoading, handleList } = useList(item, type);

  const update = useUpdate();

  return (
    <InfoWrapper id="overview">
      <Header>
        <Title>
          {item.title || item.original_title || item.name || item.original_name}
        </Title>

        {item.vote_average ? (
          <Rate>
            <FaStar />
            {Math.round(item.vote_average * 10) / 10}
          </Rate>
        ) : null}
      </Header>

      <InfoGroup>
        <Networks>
          {item.networks?.map(({ id, logo_path, name }) => (
            <Logo key={id}>
              {logo_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${logo_path}?${Date.now()}`}
                  alt={name}
                  onError={logo_path && update}
                />
              ) : null}
            </Logo>
          ))}
        </Networks>

        <InfoContent>
          {(item.release_date || item.first_air_date) && (
            <span>
              {new Date(item.release_date || item.first_air_date).getFullYear()}
            </span>
          )}

          {item.runtime && <span> · {convert(item.runtime)}</span>}

          {item.number_of_seasons && (
            <span>
              <span> · </span>
              {item.number_of_seasons === 1
                ? `${item.number_of_seasons} SEASON`
                : `${item.number_of_seasons} SEASONS`}
            </span>
          )}

          {item.spoken_languages?.length ? (
            <span>
              <span> · </span>
              {item.spoken_languages
                .map((language) => language.iso_639_1)
                .join(', ')}
            </span>
          ) : null}
        </InfoContent>
      </InfoGroup>

      {item.next_episode_to_air && (
        <Note>
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
        </Note>
      )}

      {!item.next_episode_to_air && item.last_episode_to_air && (
        <Note>
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
        </Note>
      )}

      {item.genres?.map(({ id, name }) => (
        <Genre key={id}>{name}</Genre>
      ))}

      {item.overview && <p>{item.overview}</p>}

      <Button onClick={(e) => handleList(e)} style={isAdded ? grayed : {}}>
        {isLoading ? (
          <Loader size={20} color="var(--color-primary)" width={2} />
        ) : (
          <>{isAdded ? 'Added to Watchlist' : 'Add to Watchlist'}</>
        )}
      </Button>
    </InfoWrapper>
  );
}
