import React from 'react';
import MainHeading from 'src/components/molecules/MainHeading';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
`;
const Header = () => {
    return ( 
        <HeaderStyled>
            <MainHeading />
        </HeaderStyled>
     );
}
 
export default Header;