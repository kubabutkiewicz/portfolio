import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../atoms/SocialIcon';
import Instagram from '../../assets/images/instagram.png';
import Github from '../../assets/images/github.png';
import Linkedin from '../../assets/images/linkedin.png';

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  justify-self: end;
  height: 100%;
  min-width: 20rem;
`;
const socials = [Instagram, Github, Linkedin];
const links = [
  'https://www.instagram.com/kubabutkiewicz',
  'https://www.github.com/kubabutkiewicz',
  'https://www.linkedin.com/in/jakub-butkiewicz-43b448137/',
];
const alts = ['Instagram link', 'Github link', 'Linkedin link'];
const SocialBar = () => {
  return (
    <List>
      {socials.map((social, i) => (
        <li>
          <SocialIcon img={social} alt={alts[i]} link={links[i]} />
        </li>
      ))}
    </List>
  );
};

export default SocialBar;
