import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../assets/images/logo.png';

const Logo = () => {
  return <Link to="/"><img src={LogoIcon} alt="Logo"/></Link>;
};

export default Logo;
