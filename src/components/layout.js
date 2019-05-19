import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/global';
import MyProvider from './context';

const Layout = ({ children }) => (
  <MyProvider>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
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
          Designed and developed by{` `}
          <a
            href="https://twitter.com/zpthree"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: `#555` }}
          >
            Zach Patrick
          </a>
        </footer>
      </>
    </ThemeProvider>
  </MyProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
