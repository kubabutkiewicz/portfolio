module.exports = {
  siteMetadata: {
    title: 'Jakub Butkiewicz - Front-end Developer',
    description: 'Hello and welcome in my portfolio site. If you have any questions or you want to cooperate with me contact with me jakub.butkiewicz94@gmail.com',
    author: 'Jakub Butkiewicz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/assets/fonts`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: ['project', 'technology'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components'
   
  ],
};
