import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/global';
import Header from './header';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer
            style={{
              background: `#f2f2f2`,
              maxWidth: `860px`,
              margin: `auto`,
              padding: `3rem 0`,
              textAlign: `center`,
              color: `#848484`,
            }}
          >
            Designed and developed by Zach Patrick
          </footer>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
