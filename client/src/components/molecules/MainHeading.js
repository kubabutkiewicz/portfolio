import React from 'react';
import styled from 'styled-components';
import Title from 'src/components/atoms/Title';
import SubTitle from 'src/components/atoms/SubTitle';
import Square from 'src/components/atoms/Square';

const MainHeadingStyled = styled.div`
    margin-left: 2rem;
    @media screen and (min-width: 768px){
        margin-left: 5rem;
    }
    @media screen and (min-width: 1300px) {
        margin-left: 0;
    }
`;
const MainHeading = () => {
    return ( 
        <MainHeadingStyled>
            <Square width='50' border='35' left='25' top='30' />
            <Title title="Hello, I'm Jakub" />
            <SubTitle text="And I'm front-end developer" />
        </MainHeadingStyled>
     );
}
 
export default MainHeading;