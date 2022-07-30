import React from 'react';

import { Prompt, Subtitle, TrailerWrapper } from './styles';

import { useOpacity } from 'hooks';

export default function Trailers({ videos }) {
  const { isVisible } = useOpacity();

  return (
    <section id="trailers">
      <Subtitle>Trailers</Subtitle>

      {videos.length - 1 > 0 ? (
        <TrailerWrapper isMultiple={videos.length - 1 > 1}>
          {videos.slice(1, 6).map(({ key }) => (
            <iframe
              key={key}
              title="trailer"
              src={`https://www.youtube.com/embed/${key}?rel=0&modestbranding=1`}
              allow="fullscreen"
            ></iframe>
          ))}
        </TrailerWrapper>
      ) : (
        <Prompt style={{ opacity: isVisible ? 1 : 0 }}>
          No trailer found.
        </Prompt>
      )}
    </section>
  );
}
