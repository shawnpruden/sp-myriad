import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { MdSearch, MdPlaylistPlay, MdOutlineCancel } from 'react-icons/md';

import {
  active,
  Button,
  Center,
  centralized,
  Container,
  inactive,
  Input,
  Left,
  Logo,
  NavItem,
  NavItems,
  Right,
  SearchBar,
  xsIcon,
} from './styles';

import NavMenu from './NavMenu';
import Account from './Account';
import { Loader } from '../Loader';

import { useAuth, useMedia, useScroll } from '../../hooks';

import tmdb, { mediaType } from '../../apis/tmdb';
import { movieGenres, tvGenres } from '../../apis/genres';

const navItems = [
  { name: 'Movies', path: '/movie', genres: movieGenres },
  { name: 'TV Series', path: '/tv', genres: tvGenres },
];

export default function Navbar() {
  // > SearchBar-related
  const [isFocused, setIsFocused] = useState(false);
  const [term, setTerm] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [isActive, setIsActive] = useState(false); // > NavMenu-related
  const [isHidden, setIsHidden] = useState(true); // > xs
  const inputRef = useRef();

  // > NavItem-related
  const [text, setText] = useState(''); // > NavMenu-related
  const navRef = useRef();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { isVisible } = useScroll();

  // > Account-related
  const { isLoading, user } = useAuth();

  const { xs, lg } = useMedia();

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

  useEffect(() => {
    const handleClose = (e) => {
      if (navRef.current.contains(e.target)) return;

      setText('');
    };

    !lg &&
      document.body.addEventListener('click', handleClose, { capture: true });

    return () =>
      !lg &&
      document.body.removeEventListener('click', handleClose, {
        capture: true,
      });
  }, [lg]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (term.trim() === '') return;

    navigate(`/${mediaType.all}/search/${term.toLowerCase()}`);
  };

  return (
    <Container style={{ transform: !isVisible && 'translateY(-100%)' }}>
      <Left>
        <Link to="/">
          <Logo>Myriad</Logo>
        </Link>

        <NavItems ref={navRef}>
          {navItems.map(({ name, path, genres }, index) => (
            <NavItem key={index} onMouseLeave={() => lg && setText('')}>
              {lg ? (
                <NavLink
                  to={path}
                  style={({ isActive }) => ({
                    '--d': isActive && '100%',
                    color: isActive && 'var(--color-primary)',
                  })}
                  onMouseEnter={(e) => setText(e.target.textContent)}
                >
                  {name}
                </NavLink>
              ) : (
                <span
                  onClick={(e) =>
                    e.target.textContent === text
                      ? setText('')
                      : setText(e.target.textContent)
                  }
                >
                  {name}
                </span>
              )}

              <NavMenu data={genres} isActive={name === text} path={path} />
            </NavItem>
          ))}
        </NavItems>
      </Left>

      <Center
        onMouseLeave={() => lg && setIsActive(false)}
        style={xs ? (isHidden ? inactive : active) : {}}
      >
        <SearchBar
          onSubmit={(e) => handleSearch(e)}
          style={{ boxShadow: isFocused && '0 0 10px var(--color-primary)' }}
        >
          <Input
            type="search"
            placeholder="Search..."
            ref={inputRef}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onFocus={() => {
              setIsFocused(true);
              !lg && text && setText('');
            }}
            onBlur={() => {
              setIsFocused(false);
              !lg && setIsActive(false);
            }}
            onMouseEnter={() => term && setIsActive(true)}
          />

          {xs ? (
            <MdOutlineCancel
              onClick={() => setIsHidden(true)}
              style={{ color: isFocused && 'var(--color-primary)' }}
            />
          ) : (
            <MdSearch style={{ color: isFocused && 'var(--color-primary)' }} />
          )}
        </SearchBar>

        <NavMenu type="search" data={keywords} isActive={isActive} />
      </Center>

      <Right>
        {xs && (
          <MdSearch
            style={xsIcon}
            onClick={() => {
              setIsHidden(false);
              setTimeout(() => {
                inputRef.current.focus();
              }, 100);
            }}
          />
        )}

        <Link to={user ? '/watchlist' : '/login'}>
          <Button type="watchlist">
            <MdPlaylistPlay />
            <span>Watchlist</span>
          </Button>
        </Link>

        <div style={centralized}>
          {isLoading ? (
            <Loader
              size={xs ? 20 : 30}
              color="var(--color-gray)"
              width={xs ? 3 : 5}
            />
          ) : (
            <Account />
          )}
        </div>
      </Right>
    </Container>
  );
}
