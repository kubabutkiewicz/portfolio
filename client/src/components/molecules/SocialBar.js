import React from 'react';
import styled from 'styled-components';
import SocialIcon from 'src/components/atoms/SocialIcon';
import Instagram from 'src/assets/images/instagram.png';
import Github from 'src/assets/images/github.png';
import Linkedin from 'src/assets/images/linkedin.png';

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 2rem;
  left: 1.5rem;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  height: 20rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 5rem;
    top: 4.5rem;
    left: 50%;
    width: 33%;
  }
  `;
const ListItem = styled.li`
    margin: 0;
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
        <ListItem key={social}>
          <SocialIcon img={social} alt={alts[i]} link={links[i]} />
        </ListItem>
      ))}
    </List>
  );
};

export default SocialBar;
