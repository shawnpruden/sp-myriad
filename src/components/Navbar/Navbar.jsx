import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { MdSearch, MdPlaylistPlay } from 'react-icons/md';

import {
  Button,
  Center,
  centralized,
  Container,
  Input,
  Left,
  Logo,
  NavItem,
  NavItems,
  Right,
  SearchBar,
} from './styles';

import NavMenu from './NavMenu';
import Account from './Account';
import { Loader } from '../Loader';

import { useAuth } from '../../hooks/useAuth';
import { useScroll } from '../../hooks/useScroll';

import tmdb, { mediaType } from '../../apis/tmdb';
import { movieGenres, tvGenres } from '../../apis/genres';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Movies', path: '/movie', genres: movieGenres },
  { name: 'TV Series', path: '/tv', genres: tvGenres },
];

export default function Navbar() {
  // > SearchBar-related
  const [isFocused, setIsFocused] = useState(false);
  const [term, setTerm] = useState('');
  const [keywords, setKeywords] = useState([]);

  // > MenuWrapper-related
  const [isActive, setIsActive] = useState(false);

  // > NavMenu-related
  const [text, setText] = useState('');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isVisible } = useScroll();
  const { isLoading, user } = useAuth();

  useEffect(() => {
    setKeywords([]);
    setText('');
    setTerm('');
    setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    term ? setIsActive(true) : setIsActive(false);
    !term && setKeywords([]);

    const fetchData = async () => {
      try {
        const params = { query: term };
        const { results } = await tmdb.getKeywords({ params });

        setKeywords(results);
      } catch (err) {
        console.log(err);
      }
    };

    const identifier = term && setTimeout(() => fetchData(), 500);

    return () => clearTimeout(identifier);
  }, [term]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (term.trim() === '') return;

    navigate(`/${mediaType.all}/search/${term.toLowerCase()}`);
  };

  return (
    <Container style={{ transform: !isVisible && 'translateY(-100%)' }}>
      <Left>
        <Logo>Myriad</Logo>

        <NavItems>
          {navItems.map(({ name, path, genres }, index) => (
            <NavItem
              key={index}
              onMouseLeave={() => {
                setText('');
                setIsActive(false);
              }}
            >
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  '--d': isActive && '100%',
                  color: isActive && 'var(--color-primary)',
                })}
                onMouseEnter={(e) => {
                  if (name === 'Home') return;
                  setIsActive(true);
                  setText(e.target.textContent);
                }}
              >
                {name}
              </NavLink>

              {name !== 'Home' && (
                <NavMenu data={genres} isActive={name === text} path={path} />
              )}
            </NavItem>
          ))}
        </NavItems>
      </Left>

      <Center onMouseLeave={() => setIsActive(false)}>
        <SearchBar
          onSubmit={(e) => handleSearch(e)}
          style={{ boxShadow: isFocused && '0 0 10px var(--color-primary)' }}
        >
          <Input
            type="search"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseEnter={() => term && setIsActive(true)}
          />

          <MdSearch style={{ color: isFocused && 'var(--color-primary)' }} />
        </SearchBar>

        <NavMenu data={keywords} isActive={isActive} />
      </Center>

      <Right>
        <Link to={user ? '/watchlist' : '/login'}>
          <Button>
            <MdPlaylistPlay fontSize={24} style={{ marginRight: '0.2rem' }} />
            Watchlist
          </Button>
        </Link>

        <div style={centralized}>
          {isLoading ? (
            <Loader size={30} color="var(--color-gray)" width={5} />
          ) : (
            <Account />
          )}
        </div>
      </Right>
    </Container>
  );
}
