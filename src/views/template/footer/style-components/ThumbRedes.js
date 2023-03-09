import styled from 'styled-components';

export const ThumbRedes = styled.div`
  display: grid;
  width:40px;
  height:40px;
  place-items: center;
  max-width:40px;
  min-width:40px;
  border-radius:50%;
  font-size: 17px;
  background-color: #ffffff47;
  cursor: pointer;
  &:hover{
    background: linear-gradient(0deg, rgba(10,149,229,1) 0%, rgba(51,99,217,1) 100%);
  }
`;
