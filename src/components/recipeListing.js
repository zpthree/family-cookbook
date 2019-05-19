import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RecipeListingStyles = styled.article`
  margin-bottom: 3.5rem;

  &:hover h2 {
    background: linear-gradient(to right, #2d10de 10%, #ac24e1 25%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a {
    color: #393939;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 0;
    font-size: ${props => props.theme.fs3};
  }

  .cook-name {
    color: #848484;
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-style: italic;
    ${props => props.theme.fs5};
  }

  p:not(.cook-name) {
    margin-top: 1rem;
    letter-spacing: 0.15px;
    line-height: 1.4;
  }
`;

const RecipeListing = ({ title, cook, description, slug }) => (
  <RecipeListingStyles>
    <Link to={`/${slug}`}>
      <h2>{title}</h2>
      <p className="cook-name">{cook}</p>
      <p>{description}</p>
    </Link>
  </RecipeListingStyles>
);

export default RecipeListing;

RecipeListing.propTypes = {
  title: PropTypes.string.isRequired,
  cook: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
