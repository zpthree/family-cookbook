import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  height: 10rem;
  padding: 3rem;
  background: #fafafa;

  input {
    height: 4rem;
    width: 100%;
    padding: 2rem;
    border: none;
    background: #fafafa;
    border: 1px solid #e2e2e2;
  }
`;

const Header = () => (
  <HeaderStyles>
    <input
      type="text"
      placeholder="Search for a recipe by title, creator, or meal type (breakfast, lunch, etc.)"
    />
  </HeaderStyles>
);

export default Header;
