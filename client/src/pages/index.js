import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <div>
    <SEO title="Home" />
    <ul>
      {data.allStrapiProject.edges.map(project => (
        <li key={project.node.id}>
          <h2>{project.node.Title}</h2>
          <p>{project.node.Description}</p>
          <a href={project.node.Link}>Link to code</a>
        </li>
      ))}
    </ul>
  </div>
);

export default IndexPage;


export const projects = graphql`
  query Projects {
    allStrapiProject {
      edges {
        node {
          id,
          Title,
          Description,
          Link
        }
      }
    }
  }
`;


IndexPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
