import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;
