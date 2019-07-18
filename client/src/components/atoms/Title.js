import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const TitleStyled = styled.h2`
    font-family: ${({theme}) => theme.fonts.family.bold};
    font-size: ${({theme}) => theme.fonts.size.l};
    color: ${({theme}) => theme.colors.darkGrey};
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) {
        font-size: ${({theme}) => theme.fonts.size.xl};
    }
    @media screen and (min-width: 1300px) {
        font-size: ${({theme}) => theme.fonts.size.xxl};  
    }
`;

const Title = ({title}) => {
    return ( <TitleStyled>{title}</TitleStyled> );
}
 
export default Title;

Title.propTypes = {
    title: Proptypes.string.isRequired
}