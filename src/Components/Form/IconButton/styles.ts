import styled from 'styled-components';

interface IProps {
  size?: string,
  variant?: string,
  disabled?: boolean,
  outlined?: boolean,
}

export const Container = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width:
    ${props => (props.size === 'md' || props.size == null) ?
      props.theme.spaces['space-10'] :
      props.size === 'sm' ?
      props.theme.spaces['space-8'] :
      props.size === 'lg' ?
      props.theme.spaces['space-12'] : ''
    };
  height:
    ${props => (props.size === 'md' || props.size == null) ?
      props.theme.spaces['space-10'] :
      props.size === 'sm' ?
      props.theme.spaces['space-8'] :
      props.size === 'lg' ?
      props.theme.spaces['space-12'] : ''
    };
  border: none;
  border-radius: ${props => props.theme.radius['radii-sm']};
  ${props => !props.outlined ?
    `background-color:
      ${(props.variant === 'primary' || props.variant == null) ?
        props.theme.colors['rocketseat-mid'] :
        props.variant === 'secondary' ?
        props.theme.colors['shape-primary'] :
        props.variant === 'tertiary' ?
        'transparent' : ''
      };` :
    `background-color: transparent;
    border:
      ${(props.variant === 'primary' || props.variant == null) ? 
        '1px solid ' + props.theme.colors['rocketseat-mid'] : 
        props.variant === 'secondary' ?
        '1px solid ' + props.theme.colors['shape-primary'] :
        '1px solid transparent'
      };
    `
  }
  transition: 0.2s ease 0s, box-shadow 0.2s ease 0s;
  svg {
    font-size: ${props => props.theme.typography.fontSizes['2xl']};
    color: ${props => props.theme.colors['text-title']};
  }
  ${props => !props.disabled ? 
    `&:hover {
      background-color: 
        ${(props.variant === 'primary' || props.variant == null) ?
          props.theme.colors['rocketseat-light'] :
          props.variant === 'secondary' ?
          props.theme.colors['shape-secondary'] :
          props.variant === 'tertiary' ?
          props.theme.colors['shape-primary'] : ''
        };
    }` : 
    `cursor: not-allowed;
    opacity: ${props.theme.opacitys['opacity-intense']}`
  };
  .loader {
    width: 25px;
    height: 25px;
    border: 3px solid ${props => props.theme.colors['shape-secondary']};
    border-radius: 50%;
    border-top: 3px solid ${props => props.theme.colors['text-support']};
    -webkit-animation: spin 0.6s linear infinite;
    animation: spin 0.6s linear infinite;
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
