import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Slider, List } from '../components';

import { mediaType, movieType, timeWindow, tvType } from '../apis/tmdb';

const container = { padding: '5rem 2rem 5rem 8rem', overflowX: 'hidden' };

export const firstRender = [
  {
    title: 'Trending Now',
    path: 'trending',
    type: mediaType.all,
    dataType: timeWindow.day,
  },
  {
    title: 'Top Rated Movies',
    path: 'top-rated-movies',
    type: mediaType.movie,
    dataType: movieType.top_rated,
  },
  {
    title: 'Top Rated TV Series',
    path: 'top-rated-tv',
    type: mediaType.tv,
    dataType: tvType.top_rated,
  },
];

export const secondRender = [
  {
    title: 'Fantasy Movies',
    path: 'fantasy-movies',
    type: mediaType.movie,
    dataType: 14,
  },
  {
    title: 'Drama Movies',
    path: 'drama-movies',
    type: mediaType.movie,
    dataType: 18,
  },
  {
    title: 'Romance Movies',
    path: 'romance-movies',
    type: mediaType.movie,
    dataType: 10749,
  },
];

export const thirdRender = [
  {
    title: 'Comedy TV',
    path: 'comedy-tv',
    type: mediaType.tv,
    dataType: 35,
  },
  {
    title: 'TV Dramas',
    path: 'drama-tv',
    type: mediaType.tv,
    dataType: 18,
  },
  {
    title: 'Anime',
    path: 'anime-tv',
    type: mediaType.tv,
    dataType: 16,
  },
];

const listsData = [firstRender, secondRender, thirdRender];

function Home() {
  const [lists, setLists] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setLists((prevState) => [...prevState, ...listsData[counter]]);
  }, [counter]);

  return (
    <>
      <Slider />

      <InfiniteScroll
        dataLength={lists.length}
        next={() => setCounter((prevState) => prevState + 1)}
        hasMore={counter < listsData.length - 1}
        style={container}
      >
        {lists.map(({ title, path, type, dataType }, index) => (
          <List
            key={index}
            title={title}
            path={path}
            type={type}
            dataType={dataType}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}

export default Home;
