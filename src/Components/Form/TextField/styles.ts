import styled from 'styled-components';

interface IProps {
  disabled?: boolean,
  error?: boolean,
  margin?: string,
  focused?: boolean,
}

export const Container = styled.div<IProps>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    left: ${props => props.margin === 'left' && 0};
    right: ${props => props.margin === 'right' && 0};
    width:  ${props => props.theme.spaces['space-10']};
    height: ${props => props.theme.spaces['space-6']};
    margin: 0 2px;
    transition: color 0.3s ease 0s;
    color: ${props => props.focused ? props.theme.colors['rocketseat-dark'] : props.theme.colors['placeholder']};
    opacity: ${props => props.theme.opacitys['opacity-intense']};
  }
`;
export const Input = styled.input<IProps>`
  width: 100%;
  height: ${props => props.theme.spaces['space-12']};
  padding: 0
    ${props => props.margin === 'left' ?
    props.theme.spaces['space-2'] + ' 0 ' + props.theme.spaces['space-10'] :
    props.theme.spaces['space-10'] + ' 0 ' + props.theme.spaces['space-2']
  };
  background-color: ${props => props.theme.base['gray.900']};
  color: ${props => props.theme.colors['text-title']};
  font-size: ${props => props.theme.typography.fontSizes.md};
  border: ${props => props.error ? '2px solid ' + props.theme.colors['danger-base'] : '2px solid transparent'};
  border-radius: ${props => props.theme.radius['radii-sm']};
  opacity: ${props => props.disabled && props.theme.opacitys['opacity-intense']};
  transition: border-color 0.2s ease 0s;
  &:focus {
    border: ${props => props.error ? '' : '2px solid ' + props.theme.colors['rocketseat-dark']};
  }
`;
