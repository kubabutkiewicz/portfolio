import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgStyled = styled.img`
  display: inline-block;
  width: 2.6rem;
`;
const SocialIcon = ({ img, link, alt }) => {
  return (
    <a href={link}>
      <ImgStyled src={img} alt={alt} />
    </a>
  );
};

export default SocialIcon;

SocialIcon.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
