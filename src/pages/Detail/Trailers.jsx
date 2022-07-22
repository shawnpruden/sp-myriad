import React from 'react';

import { Subtitle, TrailerWrapper } from './styles';

export default function Trailers({ videos }) {
  return (
    <section id="trailers">
      <Subtitle>Trailers</Subtitle>

      <TrailerWrapper>
        {videos.slice(1, 6).map(({ key }) => (
          <iframe
            key={key}
            title="trailer"
            src={`https://www.youtube.com/embed/${key}?rel=0`}
            allow="fullscreen"
          ></iframe>
        ))}
      </TrailerWrapper>
    </section>
  );
}
