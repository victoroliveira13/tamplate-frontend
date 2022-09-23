import styled, { ThemedStyledProps } from 'styled-components';

interface IProps {
  size?: string,
  variant?: string,
}

export const Container = styled.div<IProps>`
  display: flex;
  align-items: center;
  height:
    ${props => props.size === 'sm' ?
      props.theme.spaces[`space-6`] :
      props.size === 'lg' ? 
      props.theme.spaces[`space-8`] :
      props.size === 'md' ?
      props.theme.spaces[`space-7`] :
      props.theme.spaces[`space-7`]
    };
  padding: 0 
    ${
      props => props.size === 'sm' ?
      props.theme.spaces[`space-3`] :
      props.size === 'lg' ?
      props.theme.spaces[`space-4`] :
      props.size === 'md' ?
      props.theme.spaces[`space-3`] :
      props.theme.spaces[`space-3`]
    };
  background:
    ${props => props.variant === 'inactive' ?
      props.theme.colors['background'] :
      props => props.variant === 'active' ?
      props.theme.colors['shape-primary'] :
      props.theme.colors['shape-primary']
    };
  border:
    ${props => props.variant === 'inactive' ?
      '1px solid ' + props.theme.colors['shape-tertiary'] : 'none'
    };
  font-size: 
    ${props => props.size === 'sm' ?
      props.theme.typography.fontSizes.xxs :
      props => props.size === 'lg' ?
      props.theme.typography.fontSizes.sm :
      props => props.size === 'md' ?
      props.theme.typography.fontSizes.xs :
      props.theme.typography.fontSizes.xs
    };
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  color: ${props => props.theme.colors['text-support']};
  border-radius: ${props => props.theme.radius['radii-full']};
  cursor: default;
  &:hover {
    transition: 0.2s ease 0s, box-shadow 0.2s ease 0s;
    color: ${props => props.variant === 'inactive' ? 'white' : props.theme.colors['text-title']};
    background: ${props => props.variant === 'inactive' ? '' : props.theme.colors['shape-secondary']};
  }
`;