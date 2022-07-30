import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CastsGrid, GridItem, Prompt, Subtitle } from './styles';

import noImage from 'assets/img-not-available.png';

import { useOpacity, useUpdate } from 'hooks';

export default function Casts({ casts }) {
  const navigate = useNavigate();

  const update = useUpdate();
  const { isVisible } = useOpacity();

  return (
    <section id="casts">
      <Subtitle>Top Casts</Subtitle>

      {casts.length ? (
        <CastsGrid>
          {casts
            .slice(0, 16)
            .map(({ id, profile_path, name, original_name, character }) => (
              <GridItem key={id}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}?${Date.now()}`}
                    alt=""
                    onError={profile_path && update}
                    onClick={() =>
                      navigate(
                        `/cast/search/${(name || original_name).toLowerCase()}`
                      )
                    }
                  />
                ) : (
                  <img
                    src={noImage}
                    alt="Not available"
                    onClick={() =>
                      navigate(
                        `/cast/search/${(name || original_name).toLowerCase()}`
                      )
                    }
                  />
                )}

                <div>
                  <h5
                    onClick={() =>
                      navigate(
                        `/cast/search/${(name || original_name).toLowerCase()}`
                      )
                    }
                  >
                    {name || original_name}
                  </h5>

                  {character && (
                    <p>
                      <span>as&nbsp;</span>
                      <span>{character}</span>
                    </p>
                  )}
                </div>
              </GridItem>
            ))}
        </CastsGrid>
      ) : (
        <Prompt style={{ opacity: isVisible ? 1 : 0 }}>No casts found.</Prompt>
      )}
    </section>
  );
}
