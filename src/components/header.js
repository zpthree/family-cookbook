import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Search from './search';

const HeaderStyles = styled.header`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  height: 10rem;
  padding: 3rem;
  background: #fafafa;

  @media print {
    display: none;
  }

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
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <HeaderStyles>
        <Search searchIndex={data.siteSearchIndex.index} />
      </HeaderStyles>
    )}
  />
);

export default Header;
