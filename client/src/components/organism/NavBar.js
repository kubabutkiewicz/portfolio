import React from 'react';
import styled from 'styled-components';
import SocialBar from '../molecules/SocialBar';
import Logo from '../atoms/Logo';
import Hamburger from '../atoms/Hamburger'

const Nav = styled.nav`
    display: grid;
    grid-template-columns: 1fr 0.4fr 0.1fr;
    align-items: center;
`;
const NavBar = () => {
    return ( 
        <Nav>
            <Logo />
            <SocialBar />
            <Hamburger />
        </Nav>
     );
}
 
export default NavBar;