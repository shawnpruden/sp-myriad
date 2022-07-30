import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Button, Container, Grid, Header, Title } from './styles';

import tmdb, { mediaType, movieType, timeWindow, tvType } from 'apis/tmdb';
import header from 'assets/header.jpeg';
import { firstRender, secondRender, thirdRender } from 'data';

import Card from 'components/Card/Card';
import { useList } from 'hooks';

const reduce = (arr) => {
  return arr.reduce((result, curObj) => {
    if (!result.some((prevObj) => prevObj.id === curObj.id)) {
      result.push(curObj);
    }

    return result.filter((item) => item.poster_path);
  }, []);
};

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [data, setData] = useState({});

  const { type, term, genre, options, id } = useParams();
  const { pathname } = useLocation();

  const { list } = useList();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type, term]);

  const fetchData = useCallback(
    async (option) => {
      try {
        let response;

        if (!term) {
          const params = option === 'more' ? { page: page + 1 } : { page: 1 };

          switch (type) {
            case mediaType.movie:
              response = await (genre
                ? tmdb.getWithGenres(mediaType.movie, id, { params })
                : tmdb.getMovies(movieType.popular, { params }));

              genre
                ? setData({
                    title: genre.split('-').join(' ').replace('and', '&'),
                    path: mediaType.movie,
                  })
                : setData({ title: 'Movies', path: mediaType.movie });

              break;

            case mediaType.tv:
              response = await (genre
                ? tmdb.getWithGenres(mediaType.tv, id, { params })
                : tmdb.getTvSeries(tvType.popular, { params }));

              genre
                ? setData({
                    title: genre.split('-').join(' ').replace('and', '&'),
                    path: mediaType.tv,
                  })
                : setData({ title: 'TV Series', path: mediaType.tv });

              break;

            case 'companies':
              response = await tmdb.getWithCompanies(id, {
                params,
              });

              setData({
                title: options.split('-').join(' '),
                path: mediaType.movie,
              });

              break;

            case 'networks':
              response = await tmdb.getWithNetworks(id, {
                params,
              });

              setData({
                title: options.split('-').join(' '),
                path: mediaType.tv,
              });

              break;

            case firstRender[0].path:
              response = await tmdb.getTrends(timeWindow.day, { params });

              setData({
                title: firstRender[0].title,
                path: mediaType.movie || mediaType.tv,
              });

              break;

            case firstRender[1].path:
              response = await tmdb.getMovies(movieType.top_rated, { params });

              setData({ title: firstRender[1].title, path: mediaType.movie });

              break;

            case firstRender[2].path:
              response = await tmdb.getTvSeries(tvType.top_rated, { params });

              setData({ title: firstRender[2].title, path: mediaType.tv });

              break;

            case secondRender[0].path:
              response = await tmdb.getWithGenres(
                mediaType.movie,
                secondRender[0].dataType,
                { params }
              );

              setData({ title: secondRender[0].title, path: mediaType.movie });

              break;

            case secondRender[1].path:
              response = await tmdb.getWithGenres(
                mediaType.movie,
                secondRender[1].dataType,
                { params }
              );

              setData({ title: secondRender[1].title, path: mediaType.movie });

              break;

            case secondRender[2].path:
              response = await tmdb.getWithGenres(
                mediaType.movie,
                secondRender[2].dataType,
                { params }
              );

              setData({ title: secondRender[2].title, path: mediaType.movie });

              break;

            case thirdRender[0].path:
              response = await tmdb.getWithGenres(
                mediaType.tv,
                thirdRender[0].dataType,
                {
                  params,
                }
              );

              setData({ title: thirdRender[0].title, path: mediaType.tv });

              break;

            case thirdRender[1].path:
              response = await tmdb.getWithGenres(
                mediaType.tv,
                thirdRender[1].dataType,
                {
                  params,
                }
              );

              setData({ title: thirdRender[1].title, path: mediaType.tv });

              break;

            case thirdRender[2].path:
              response = await tmdb.getWithGenres(
                mediaType.tv,
                thirdRender[2].dataType,
                {
                  params,
                }
              );

              setData({ title: thirdRender[2].title, path: mediaType.tv });

              break;

            default:
              break;
          }
        } else {
          const params =
            option === 'more'
              ? { page: page + 1, query: term }
              : { page: 1, query: term };

          response = await (type === 'all'
            ? tmdb.searchMedia({ params })
            : tmdb
                .searchPerson({ params })
                .then(({ results }) =>
                  [].concat.apply(
                    [],
                    results.map((result) => result.known_for)
                  )
                )
                .then((results) => ({ results })));

          const title = response.results.some((result) =>
            result.hasOwnProperty('poster_path')
          )
            ? `Results for "${term}"`
            : 'No results found';

          setData({
            title: title,
            path: mediaType.movie || mediaType.tv,
          });
        }

        setItems((prevState) => [...prevState, ...response.results]);

        setTotalPage(response.total_pages);
      } catch (err) {
        console.log(err);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [type, term, page, genre, options]
  );

  useEffect(() => {
    if (pathname === '/watchlist') {
      setData({ title: 'Watchlist' });

      setItems(list);
    }
  }, [list, pathname]);

  useEffect(() => {
    if (pathname === '/watchlist') return;

    setItems([]);
    setPage(1);

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, term, genre]);

  const handleLoadMore = () => {
    fetchData('more');

    setPage((prevState) => prevState + 1);
  };

  const gridItems = useMemo(() => reduce(items), [items]);

  return (
    <>
      <Header>
        <img src={header} alt="header" />
      </Header>

      <Container>
        <Title type={type}>{data.title}</Title>

        <Grid>
          {gridItems?.map((item) => (
            <Card key={item.id} item={item} type={data.path} />
          ))}
        </Grid>

        {page < totalPage && pathname !== '/watchlist' && (
          <Button onClick={handleLoadMore}>Load More</Button>
        )}
      </Container>
    </>
  );
}
