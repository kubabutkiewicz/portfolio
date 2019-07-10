import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LogoIcon from '../../assets/images/logo.png';

const LogoStyled = styled(Link)`
  margin-left: 1.5rem;
  position: relative;
  z-index: 99;
`;
const Img = styled.img`
  width: 7.5rem;
`;
const Logo = () => {
  return <LogoStyled to="/"><Img src={LogoIcon} alt="Logo"/></LogoStyled>;
};

export default Logo;
