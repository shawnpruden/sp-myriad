import { mediaType, movieType, timeWindow, tvType } from '../apis/tmdb';
import logos from '../assets/logos';

// > Row data
export const networks = [
  { id: 49, name: 'HBO', logo: logos.hbo },
  { id: 16, name: 'CBS', logo: logos.cbs },
  { id: 174, name: 'AMC', logo: logos.amc },
  { id: 67, name: 'Showtime', logo: logos.showtime },
  { id: 2, name: 'ABC', logo: logos.abc },
  { id: 6, name: 'NBC', logo: logos.nbc },
  { id: 71, name: 'The CW', logo: logos.cw },
  { id: 318, name: 'Starz', logo: logos.starz },
  { id: 88, name: 'FX', logo: logos.fx },
  { id: 213, name: 'Netflix', logo: logos.netflix },
  { id: 453, name: 'Hulu', logo: logos.hulu },
  { id: 1024, name: 'Amazon', logo: logos.amazon },
  { id: 2739, name: 'Disney+', logo: logos.disney },
  { id: 65, name: 'History', logo: logos.history },
  { id: 43, name: 'National Geographic', logo: logos.ng },
  { id: 2087, name: 'Discovery Channel', logo: logos.discovery },
];

// > List data
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
