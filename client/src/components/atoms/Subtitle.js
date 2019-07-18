import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const SubTitleStyled = styled.p`
  font-family: ${({ theme }) => theme.fonts.family.light};
  font-size: ${({ theme }) => theme.fonts.size.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.l};
  }
`;
const SubTitle = ({ text }) => {
  return <SubTitleStyled>{text}</SubTitleStyled>;
};

export default SubTitle;
SubTitle.propTypes = {
  text: Proptypes.string.isRequired,
};
