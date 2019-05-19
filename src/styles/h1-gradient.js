import styled from 'styled-components';

const H1Gradient = styled.h1`
  color: #2d10de;
  background: linear-gradient(to right, #da1515 10%, #ac24e1 20%, #2d10de 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media print {
    background: none;
    -webkit-text-fill-color: #393939;
  }
`;

export default H1Gradient;
