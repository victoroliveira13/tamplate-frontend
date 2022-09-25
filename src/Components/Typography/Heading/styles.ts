import styled from 'styled-components';

interface IProps {
  size?: string,
}

export const Container = styled.label<IProps>`
  margin: 0;
  color: ${props => props.theme.colors['text-title']};
  font-size:
    ${props => props.size === 'sm' ?
      props.theme.typography.fontSizes.xl :
      props.size === 'md' ?
      props.theme.typography.fontSizes['2xl'] :
      props.size === 'lg' ?
      props.theme.typography.fontSizes['4xl'] :
      props.size === 'xl' ?
      props.theme.typography.fontSizes['6xl'] :
      props.size === '2xl' ?
      props.theme.typography.fontSizes['8xl'] :
      props.theme.typography.fontSizes.xl
    };
  line-height: ${props => props.theme.typography.lineHeights.shorter};
`;
