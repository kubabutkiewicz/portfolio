import React, { useState } from 'react';
import styled from 'styled-components';
import SocialBar from 'src/components/molecules/SocialBar';
import Logo from 'src/components/atoms/Logo';
import Hamburger from 'src/components/atoms/Hamburger';
import Menu from 'src/components/molecules/Menu';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  position: fixed;
  top: 1.5rem;
  width: 100vw;
`;

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <Nav>
      <Menu isMenuOpen={isMenuOpen} />
      <Logo />
      <SocialBar />
      <Hamburger isMenuOpen={isMenuOpen} handleOpenMenu={handleOpenMenu} />
    </Nav>
  );
};

export default NavBar;
