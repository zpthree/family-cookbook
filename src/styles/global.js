import { createGlobalStyle } from 'styled-components';

export const theme = {
  maxWidth: `860px`,
  fs1: `4.8rem`,
  fs2: `3.6rem`,
  fs3: `2.4rem`,
  fs4: `1.6rem`,
  fs5: `1.4rem`,
};

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: ${props => props.theme.fs4};
    color: #393939;
    background: #f1f1f1;
    font-family: 'Roboto', sans-serif;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;

    @media print {
      background: transparent;
    }
  }
  
  main {
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    max-width: 860px;
    width: 100%;
    margin: auto;
    padding: 2rem 3rem;
    background: #fafafa;
    border-radius: 0 0 3px 3px;

    @media print {
      background: transparent;
    }
  }

  footer {
    @media print {
      display: none;
    }
  }

  h1 {
    font-size: ${props => props.theme.fs1};
  }

  h2 {
    font-size: ${props => props.theme.fs2};
  }

  
  h3 {
    font-size: ${props => props.theme.fs3};
  }

  p {
    letter-spacing: 0.15px;
    line-height: 1.4;
  }

  input,textarea,button {
    font-size: ${props => props.theme.fs4};
  }

  @media print {
    @page {
      padding: 0;
      margin: 0 0 30px;
      border: none;
      border-collapse: collapse;
    }
  }
`;
