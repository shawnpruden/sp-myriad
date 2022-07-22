import axios from 'axios';

import queryString from 'query-string';

// > config axios
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },

  params: { api_key: process.env.REACT_APP_TMDB_API_KEY },
  paramsSerializer: (params) => queryString.stringify(params),
});

instance.interceptors.request.use(async (config) => config);

instance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },

  (err) => {
    throw err;
  }
);

// > tmdb api
export const mediaType = {
  all: 'all',
  movie: 'movie',
  tv: 'tv',
  person: 'person',
};

export const movieType = {
  top_rated: 'top_rated',
  popular: 'popular',
  upcoming: 'upcoming',
};

export const tvType = {
  top_rated: 'top_rated',
  popular: 'popular',
  on_the_air: 'on_the_air',
};

export const timeWindow = {
  day: 'day',
  week: 'week',
};

const tmdb = {
  getTrends: (period, params) =>
    instance.get(`/trending/all/${timeWindow[period]}`, params),

  getVideos: (type, id) => instance.get(`/${mediaType[type]}/${id}/videos`),

  getMovies: (type, params) =>
    instance.get(`/movie/${movieType[type]}`, params),

  getTvSeries: (type, params) => instance.get(`/tv/${tvType[type]}`, params),

  getDetail: (type, id, params) =>
    instance.get(`/${mediaType[type]}/${id}`, params),

  getCredits: (type, id) => instance.get(`/${mediaType[type]}/${id}/credits`),

  getSimilar: (type, id) =>
    instance.get(`/${mediaType[type]}/${id}/recommendations`),

  getMoviesWithGenres: (id, params) =>
    instance.get(`/discover/movie?with_genres=${id}`, params),

  getTvWithGenres: (id, params) =>
    instance.get(`/discover/tv?with_genres=${id}`, params),

  search: (params) => instance.get('/search/multi', params),

  getKeywords: (params) => instance.get('/search/keyword', params),
};

export default tmdb;
