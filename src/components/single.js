import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from './layout';
import SEO from './seo';
import H1Gradient from '../styles/h1-gradient';
import Separator from '../styles/separator';

const SingleStyles = styled.div`
  .options a {
    color: #272727;
    text-decoration: none;
    margin-right: 2.5rem;
  }

  .options span {
    color: #272727;
  }

  h1 {
    margin-bottom: 0;
    padding: 0;
  }

  .cook-name {
    color: #848484;
    margin-top: 0.5rem;
    margin-left: 0.25rem;
    font-style: italic;
    ${props => props.theme.fs5};
  }
`;

const Single = ({ data }) => (
  <Layout>
    <SEO />
    <SingleStyles>
      <div className="options">
        <Link to="/">🏡 Go Home</Link>
        <span>🖨️ Print</span>
      </div>
      <H1Gradient>{data.markdownRemark.frontmatter.title}</H1Gradient>
      <p className="cook-name">{data.markdownRemark.frontmatter.author}</p>
      {data.markdownRemark.frontmatter.cookTime && (
        <p>⏲️ {data.markdownRemark.frontmatter.cookTime}</p>
      )}
      <Separator />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </SingleStyles>
  </Layout>
);

Single.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        cookTime: PropTypes.string,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Single;

export const query = graphql`
  query recipe($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        cookTime
      }
      html
    }
  }
`;
