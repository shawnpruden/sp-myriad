import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { CgChevronDoubleUp } from 'react-icons/cg';

import { Button, Container, Icons, Menu, Left, Wrapper, Right } from './styles';

export default function Footer() {
  return (
    <Container>
      <Button onClick={() => scroll.scrollToTop({ duration: 500 })}>
        <CgChevronDoubleUp />
      </Button>

      <Wrapper>
        <Left>
          <Menu>
            <li>Movies</li>
            <li>TV Series</li>
            <li>Live TV</li>
            <li>Live News</li>
          </Menu>
          <Menu>
            <li>Accessibility</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Advertising</li>
          </Menu>
          <Menu>
            <li>About Us</li>
            <li>Press</li>
            <li>Help & FAQs</li>
            <li>Contact</li>
          </Menu>
        </Left>

        <Right>
          <Icons>
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaFacebook />
          </Icons>

          <div>
            <p>
              &copy; {new Date().getFullYear()} Myriad. All rights reserved.
            </p>
            <p>
              An elaborate website made by <em>Shawn Pruden</em> with Passion.
            </p>
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
}
