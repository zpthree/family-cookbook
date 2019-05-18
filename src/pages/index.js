import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import RecipeListing from '../components/recipeListing';
import { MyContext } from '../components/context';
import H1Gradient from '../styles/h1-gradient';
import Separator from '../styles/separator';
import Header from '../components/header';

const IndexPageStyles = styled.div`
  h1 {
    padding-top: 0;
    margin-top: 0;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <IndexPageStyles>
      <H1Gradient>Family Recipes</H1Gradient>
      <Separator />
      <MyContext.Consumer>
        {({ search, results }) =>
          search
            ? results.map(node => (
                <RecipeListing
                  key={node.id}
                  title={node.title}
                  cook={node.author}
                  slug={node.slug}
                  description={node.description}
                />
              ))
            : data.allMarkdownRemark.edges.map(({ node }) => (
                <RecipeListing
                  key={node.frontmatter.slug}
                  title={node.frontmatter.title}
                  cook={node.frontmatter.author}
                  slug={node.frontmatter.slug}
                  description={node.frontmatter.description}
                />
              ))
        }
      </MyContext.Consumer>
    </IndexPageStyles>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query recipes {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            description
            author
            slug
          }
        }
      }
    }
  }
`;
