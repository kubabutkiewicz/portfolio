import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 5rem;
  height: 5rem;
  border: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
  position: relative;
  padding: 0;
  cursor: pointer;
  justify-self: end;
  transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? '45deg' : '0')});
  transition: transform 0.2s ease;
  margin-right: 1.5rem;
  :focus {
    outline: none;
  }
`;
const Line = styled.span`
  position: relative;
  width: 50%;
  transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? '0' : '0')});
  transition: transform 0.2s ease;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  

  ::after,
  ::before {
    content: '';
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    position: absolute;
    right: 0;
    transition: transform 0.2s ease;
    transform-origin: right;
  }
  ::after {
    bottom: 1rem;
    width: 125%;
    transform: scaleX(${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')});
  }
  ::before {
    top: 1rem;
    width: 75%;
    transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? '90deg' : '0')}) 
    
    scaleX(${({ isMenuOpen }) => (isMenuOpen ? '1.35' : '1')})
    translate(${({ isMenuOpen }) => (isMenuOpen ? '5%, 600%' : '0,0')})
    ;
    transform-origin: right;
  }
`;
const Hamburger = ({ isMenuOpen, handleOpenMenu }) => {
  return (
    <Button type="button" isMenuOpen={isMenuOpen} onClick={handleOpenMenu}>
      <Line isMenuOpen={isMenuOpen} />
    </Button>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};
