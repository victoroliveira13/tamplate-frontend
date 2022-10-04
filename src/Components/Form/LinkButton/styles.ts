import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  variant?: string,
}

export const Container = styled(Link)<IProps>`
  position: absolute;
  display: flex;
  align-items: center;

  &:hover {
    span::before {
      width: 100%;
      height: 1px;
    }
  }
  span {
    color:
      ${props => (props.variant === 'primary' || props.variant == null) ?
        props.theme.colors['rocketseat-light'] :
        props => props.variant === 'secondary' ?
        props.theme.colors['text-support'] :
        props => props.variant === 'tertiary' ?
        props.theme.colors['placeholder'] : ''
      };
    font-size: ${props => props.theme.typography.fontSizes.md};
    cursor: pointer;
    transition: border 0.2s ease 0s;
    border: 0px solid transparent;
    ${props => (props.variant == 'primary' || props.variant == null) ?
      `&::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 0px;
        height: 1px;
        transition: width 0.2s ease 0s;
        background-color: ${props.theme.colors['rocketseat-light']};
      }` :
      props.variant === 'secondary' ?
      `&:hover{
        color: ${props.theme.colors['text-title']};
      }` :
      props.variant === 'tertiary' ?
      `&:hover{
        color: ${props.theme.colors['text-support']};
      }` : ''
    }
  }
  svg {
    color:
      ${props => (props.variant === 'primary' || props.variant == null) ? 
        props.theme.colors['rocketseat-light'] :
        props.theme.colors['placeholder']
      };
    margin-right: ${props => props.theme.spaces.xs};
  }
`;
