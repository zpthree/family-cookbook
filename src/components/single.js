import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from './layout';
import SEO from './seo';
import H1Gradient from '../styles/h1-gradient';
import Separator from '../styles/separator';

const SingleStyles = styled.div`
  .options {
    @media print {
      display: none;
    }
  }

  .options a {
    color: #393939;
    text-decoration: none;
    margin-right: 2.5rem;
  }

  .options button {
    color: #393939;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  h1 {
    font-size: ${props => props.theme.fs2};
    margin-bottom: 0;
    padding: 0;

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fs1};
    }
  }

  .cook-name {
    color: #848484;
    margin-top: 0.5rem;
    margin-left: 0.25rem;
    font-style: italic;
    ${props => props.theme.fs5};
  }

  .recipe-content h2 {
    font-size: ${props => props.theme.fs3};
  }

  .recipe-content h2:not(:first-child) {
    margin-top: 3.5rem;
  }

  .recipe-content ul,
  .recipe-content ol {
    padding-left: 2rem;
  }

  .recipe-content li {
    margin-bottom: 1rem;
  }
`;

const Single = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <SingleStyles>
      <div className="options">
        <Link to="/">🏡 Go Home</Link>
        <button type="button" onClick={() => window.print()}>
          🖨️ Print
        </button>
      </div>
      <H1Gradient>{data.markdownRemark.frontmatter.title}</H1Gradient>
      <p className="cook-name">{data.markdownRemark.frontmatter.author}</p>
      {data.markdownRemark.frontmatter.cookTime && (
        <p>⏲️ {data.markdownRemark.frontmatter.cookTime}</p>
      )}
      <Separator mb="3rem" />
      <div
        className="recipe-content"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
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
