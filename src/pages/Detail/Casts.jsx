import React from 'react';

import { CastsGrid, GridItem, Subtitle } from './styles';

import noImage from '../../assets/img-not-available.png';

import { useUpdate } from '../../hooks';

export default function Casts({ casts }) {
  const update = useUpdate();

  return (
    <section id="casts">
      <Subtitle>Top Casts</Subtitle>

      <CastsGrid>
        {casts
          .slice(0, 16)
          .map(({ id, profile_path, name, original_name, character }) => (
            <GridItem key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}?${Date.now()}`}
                  alt={name || original_name}
                  onError={profile_path && update}
                />
              ) : (
                <img src={noImage} alt="Not available" />
              )}

              <div>
                <h5>{name || original_name}</h5>

                <p>as {character}</p>
              </div>
            </GridItem>
          ))}
      </CastsGrid>
    </section>
  );
}
