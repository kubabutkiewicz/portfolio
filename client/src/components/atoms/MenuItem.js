import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItemStyled = styled.li`
  :not(:last-child) {
    margin-bottom: 4.6rem;
  }
`;
const LinkStyled = styled.a`
  font-size: ${({ theme }) => theme.fonts.size.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  position: relative;
  z-index: 1;
  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: ${({theme}) => theme.colors.white};
    width: 100%;
    height: calc(100% + 0.5rem);
    bottom: -0.5rem;
    left: 0;
    transform: scaleY(0.1);
    transform-origin: bottom;
    transition: transform 0.2s ease;
  }
  :hover::after {
    transform: scale(1);
  }
`;

const MenuItem = ({ route, text }) => {
  const sectionId = `#${route}`;
  return (
    <ListItemStyled>
      <LinkStyled href={sectionId}>{text}</LinkStyled>
    </ListItemStyled>
  );
};

export default MenuItem;
MenuItem.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
