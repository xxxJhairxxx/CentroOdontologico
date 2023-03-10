import styled from 'styled-components';

export const Limit = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${props => props.mt? "margin: 5% auto" : "0"};
  align-items: ${props => props.align=="center" ? "center" : "start"};

  ` 