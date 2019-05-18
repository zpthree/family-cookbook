const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const recipes = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  recipes.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/recipe/${node.frontmatter.slug}`,
      component: path.resolve(`./src/components/single.js`),
      context: {
        slug: `${node.frontmatter.slug}`,
      },
    });
  });
};
