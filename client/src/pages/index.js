import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import SEO from '../components/seo';
import NavBar from '../components/organism/NavBar';
import '../assets/index.css';

import theme from '../assets/theme';

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%; /* Now 10px = 1rem! */
}
  body {
    font-family: 'Jost';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
   
  }
`;
const IndexPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SEO title="Home" />
      <NavBar />
      <ul>
        {data.allStrapiProject.edges.map(project => (
          <li key={project.node.id}>
            <h2>{project.node.Title}</h2>
            <p>{project.node.Description}</p>
            <a href={project.node.Link}>Link to code</a>
          </li>
        ))}
      </ul>
    </>
  </ThemeProvider>
);

export default IndexPage;

export const projects = graphql`
  query Projects {
    allStrapiProject {
      edges {
        node {
          id
          Title
          Description
          Link
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
