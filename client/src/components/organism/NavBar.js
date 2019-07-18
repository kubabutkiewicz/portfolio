import React, { useState } from 'react';
import styled from 'styled-components';
import SocialBar from 'src/components/molecules/SocialBar';
import Logo from 'src/components/atoms/Logo';
import Hamburger from 'src/components/atoms/Hamburger';
import Menu from 'src/components/molecules/Menu';

const Nav = styled.nav`
  
  margin: 1.5rem 0;
  position: fixed;
  top: 1.5rem;
  z-index: 9999;
  width: 100vw;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1500px;
`;
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <Nav>
      <Container>
      <Menu isMenuOpen={isMenuOpen} />
      <Logo />
      <SocialBar />
      <Hamburger isMenuOpen={isMenuOpen} handleOpenMenu={handleOpenMenu} />
      </Container>
    </Nav>
  );
};

export default NavBar;
