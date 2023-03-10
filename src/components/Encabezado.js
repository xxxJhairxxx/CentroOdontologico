import styled from 'styled-components';

export const Encabezado = styled.div`
    width: 100%;
    margin: 5% 0;
    line-height: 60px;
    text-align: center;
    ${props => props.start?'text-align : start':''};
  h2{
        font-size: 55px;
        color: #00173C;
        ${props => props.cwhite?'color : #fff':''};
  }
  h4{
    font-size: 20px;
        color: #3665DD;
  }
`;
