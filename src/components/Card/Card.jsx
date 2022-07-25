import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';
import { BsPlus, BsCheck } from 'react-icons/bs';

import {
  Anchor,
  Button,
  Container,
  Content,
  Details,
  Image,
  Info,
  Rate,
  spaced,
  Thumbnail,
  Title,
} from './styles';

import { Loader } from '../Loader';

import { mediaType } from '../../apis/tmdb';
import noImage from '../../assets/img-not-available.png';
import { movieGenres, tvGenres } from '../../apis/genres';

import { useList, useUpdate } from '../../hooks';

const truncate = (str, num) =>
  str?.length > num ? str.slice(0, num - 1) + '...' : str;

const createGenres = (ids) => {
  const allGenres = [...movieGenres, ...tvGenres];

  const genres = allGenres.filter((genre) => ids?.includes(genre.id));

  return [...new Set(genres.map((genre) => genre.name))].join(' · ');
};

export default function Card({ item, type }) {
  const [isVisible, setIsVisible] = useState(false);
  const update = useUpdate();

  const { isAdded, isLoading, handleList } = useList(item, type);

  const navigate = useNavigate();

  return (
    <Container
      onClick={() =>
        navigate(
          `/${item.media_type || type || mediaType.tv || mediaType.movie}/${
            item.id
          }`
        )
      }
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}?${Date.now()}`}
        alt=""
        style={{ opacity: isVisible ? 1 : 0 }}
        onLoad={() => setIsVisible(true)}
        onError={item.poster_path && update}
      />

      <Details>
        {item.backdrop_path ? (
          <Thumbnail>
            <img
              src={`https://image.tmdb.org/t/p/w500${
                item.backdrop_path
              }?${Date.now()}`}
              alt={
                item.title ||
                item.original_title ||
                item.name ||
                item.original_name
              }
              onError={item.backdrop_path && update}
            />

            {item.vote_average ? (
              <Rate>
                <FaStar />
                {Math.round(item.vote_average * 10) / 10}
              </Rate>
            ) : null}
          </Thumbnail>
        ) : (
          <img
            src={noImage}
            alt="Not available"
            style={{ height: '40%', objectFit: 'cover' }}
          />
        )}

        <Content>
          <Title>
            {item.title ||
              item.original_title ||
              item.name ||
              item.original_name}
          </Title>

          <Info>
            <span>
              {new Date(item.release_date || item.first_air_date).getFullYear()}
            </span>

            {item.genre_ids?.length ? <span> | </span> : null}

            <span>{createGenres(item.genre_ids)}</span>

            <p>{truncate(item.overview, 100)}</p>
          </Info>

          <div style={spaced}>
            <Anchor>Details</Anchor>

            <Button onClick={(e) => handleList(e)}>
              {isLoading ? (
                <Loader size={18} color="var(--color-white)" width={2} />
              ) : (
                <>{isAdded ? <BsCheck size={20} /> : <BsPlus size={20} />}</>
              )}
            </Button>
          </div>
        </Content>
      </Details>
    </Container>
  );
}
