import styled from 'styled-components';

interface IProps {
  size?: string,
}

export const Container = styled.label<IProps>`
  max-width: 300px;
  margin: 0px;
  color: ${props => props.theme.colors['text-base']};
  line-height: ${props => props.theme.typography.lineHeights.base};
  font-size: 
    ${
      props => props.size ?
      props.theme.typography.fontSizes[props.size] :
      props.theme.typography.fontSizes.md
    };
  
`;
