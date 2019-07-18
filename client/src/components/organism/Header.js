import React from 'react';
import MainHeading from 'src/components/molecules/MainHeading';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  
  @media screen and (min-width: 1300px){
    min-width: 120rem;
    margin: 0 auto;
  }
`;
const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <MainHeading />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
