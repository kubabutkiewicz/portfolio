import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const TitleStyled = styled.h2`
    font-family: ${({theme}) => theme.fonts.family.bold};
    font-size: ${({theme}) => theme.fonts.size.l};
    color: ${({theme}) => theme.colors.darkGrey};
`;

const Title = ({title}) => {
    return ( <TitleStyled>{title}</TitleStyled> );
}
 
export default Title;

Title.propTypes = {
    title: Proptypes.string.isRequired
}