import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
import { bp } from '../mobile';

import { Slider, List, Row } from '../components';
import { firstRender, networks, secondRender, thirdRender } from './data';
import { useMedia } from '../hooks';

export const Wrapper = styled.section`
  padding: 2vh 2rem 2vh 8rem;

  overflow-x: hidden;

  @media ${bp.xs} {
    padding: 1vh 1rem;
    margin-top: 8rem;
  }

  @media ${bp.md} {
    padding: 1vh 2rem;
    margin-top: 1rem;
  }
`;

const xsWrapper = {
  padding: '0 1rem',
  margin: '2rem 0',

  overflowX: 'hidden',
};

const mdWrapper = {
  padding: '0 2rem',
  margin: '2rem 0',

  overflowX: 'hidden',
};

const lgWrapper = { padding: '5rem 2rem 5rem 8rem', overflowX: 'hidden' };

const listsData = [firstRender, secondRender, thirdRender];

export default function Home() {
  const [lists, setLists] = useState([]);
  const [counter, setCounter] = useState(0);

  const { xs, md } = useMedia();

  const wrapper = (() => {
    if (xs) return xsWrapper;
    if (md) return mdWrapper;

    return lgWrapper;
  })();

  useEffect(() => {
    setLists((prevState) => [...prevState, ...listsData[counter]]);
  }, [counter]);

  return (
    <>
      <Slider />
      <Wrapper>
        <Row rowData={networks} />
      </Wrapper>

      <InfiniteScroll
        dataLength={lists.length}
        next={() => setCounter((prevState) => prevState + 1)}
        hasMore={counter < listsData.length - 1}
        style={wrapper}
      >
        {lists.map((listData, index) => (
          <List key={index} listData={listData} />
        ))}
      </InfiniteScroll>
    </>
  );
}
