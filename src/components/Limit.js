import styled from 'styled-components';

export const Limit = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: ${props => props.align=="center" ? "center" : "start"};

  ` 