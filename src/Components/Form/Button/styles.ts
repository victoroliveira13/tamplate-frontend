import styled from 'styled-components';

interface IProps {
  size?: string,
  full?: boolean,
  variant?: string,
  margin?: string,
}

export const Container = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width:${props => props.full ? `100%` : ``};
  height:
    ${
      props => props.size === 'sm' ?
      props.theme.spaces[`space-8`] :
      props.size === 'lg' ? 
      props.theme.spaces[`space-12`] :
      props.size === 'md' ?
      props.theme.spaces[`space-10`] :
      props.theme.spaces[`space-10`]
    };
  padding: 0 
    ${
      props => props.size === 'sm' ?
      props.theme.spaces[`space-4`] :
      props.size === 'lg' ?
      props.theme.spaces[`space-8`] :
      props.size === 'md' ?
      props.theme.spaces[`space-6`] :
      props.theme.spaces[`space-6`]
    };
  background: 
    ${props => props.variant === 'primary' ?
      props.theme.colors[`rocketseat-mid`] :
      props.variant === 'secondary' ?
      props.theme.colors[`shape-secondary`] :
      props.theme.colors[`rocketseat-mid`]
    };
  font-size:
    ${props => props.size ?
      props.theme.typography.fontSizes[props.size] :
      props.theme.typography.fontSizes.md
    };
  font-weight: ${props => props.theme.typography.fontWeights.bold};
  color: ${props => props.theme.colors[`text-base`]};
  border: none;
  border-radius: ${props => props.theme.radius.sm};
  &:hover, &:focus, &:active {
    transition: 0.2s ease 0s, box-shadow 0.2s ease 0s;
    background:
      ${props => props.variant === 'primary' ?
        props.theme.colors[`rocketseat-light`] :
        props.variant === 'secondary' ?
        props.theme.colors[`shape-tertiary`] :
        props.theme.colors[`rocketseat-light`]
      };
  }
  &:disabled {
    background:
      ${props => props.variant === 'primary' ?
        props.theme.colors[`rocketseat-mid`] :
        props.variant === 'secondary' ?
        props.theme.colors[`shape-tertiary`] :
        props.theme.colors[`rocketseat-mid`]
      };
    opacity: ${props => props.theme.opacitys[`opacity-medium`]};
    cursor: not-allowed;
  }
  & > svg {
    margin: 0
      ${props => props.margin === 'left' ?
        props.theme.spaces[`space-2`] + ` 0 0 `:
        props.margin === 'right' ?
        `0 0 ` + props.theme.spaces[`space-2`] : ``
      };
  }
  svg {
    width: 20px;
    height: 20px;
    stroke: currentcolor;
    stroke-width: 0;
  }
`;
