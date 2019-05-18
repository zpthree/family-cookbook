import styled from 'styled-components';

const Separator = styled.div`
  height: ${props => (props.height ? props.height : `1rem`)};
  width: ${props => (props.width ? props.width : `10rem`)};
  background-image: linear-gradient(
    to right,
    #da1515 10%,
    #ac24e1 50%,
    #2d10de 100%
  );
  margin-top: ${props => (props.mt ? props.mt : `3rem`)};
  margin-bottom: ${props => (props.mb ? props.mb : `5rem`)};

  @media print {
    height: 1px;
    background: #dadada;
  }
`;

export default Separator;
