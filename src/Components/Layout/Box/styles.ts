import styled, { ThemedStyledProps } from 'styled-components';

interface IProps {
  css: ThemedStyledProps<any, any>
}

export const Container = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors[props.css.backgroundColor]};
  color: ${props => props.theme.colors['text-base']};
  ${props => props.css};
  &:hover{
    transition: ${props => props.theme.transitions.fast} ease 0s;
    background: ${props => props.theme.colors[props.css.backgroundHover]};
  }
`;
