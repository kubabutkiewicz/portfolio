import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MenuItem from 'src/components/atoms/MenuItem';

const MenuStyled = styled.ul`
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : '0')};
  
  transition: opacity 0.3s 0.1s ease;
`;

const Menu = ({isMenuOpen}) => {
  return (
    <MenuStyled isMenuOpen={isMenuOpen}>
      <MenuItem route="about" text="About me." />
      <MenuItem route="my-projects" text="My Projects." />
      <MenuItem route="contact" text="Contact." />
    </MenuStyled>
  );
};

export default Menu;

Menu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
  };