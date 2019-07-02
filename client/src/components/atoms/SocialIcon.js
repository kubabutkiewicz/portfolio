import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = ({img, link, alt}) => {
    return ( 
        <a href={link}><img src={img} alt={alt}/></a>
     );
}
 
export default SocialIcon;

SocialIcon.propTypes = {
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };