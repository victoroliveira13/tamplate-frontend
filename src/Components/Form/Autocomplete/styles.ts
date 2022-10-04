import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;

  ul { 
    position: absolute;
    width: 100%;
    max-height: ${props => props.theme.spaces['space-40']};
    background-color: ${props => props.theme.base['gray.900']};
    color: ${props => props.theme.colors[`text-support`]};
    transition: border-color 0.2s ease 0s;
    border: 1px solid ${props => props.theme.colors[`border-color`]};
    border-radius: ${props => props.theme.radius[`radii-sm`]};
    overflow-y: auto;
    
    ::-webkit-scrollbar {
      width: ${props => props.theme.spaces.sm};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors['shape-primary']};
      border-radius: ${props => props.theme.radius.md};
    }
  }

  li {
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${props => props.theme.spaces[`space-4`]} ${props => props.theme.spaces.sm};
    list-style: none;
    cursor: default;
    svg{
      display: none;
    }
    &:hover, &.active{
      background-color: ${props => props.theme.colors['shape-primary']};
    }
    & + li {
      border-top: 1px solid ${props => props.theme.colors[`border-color`]};
    }
    &.active{
      svg {
        margin-left: ${props => props.theme.spaces[`space-1`]};
        display: block;
      }
    }
    &.text-center{
      justify-content: center;
    }
  }
`;