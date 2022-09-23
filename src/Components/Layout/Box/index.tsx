import React, { CSSProperties } from 'react';

import { Container } from './styles';

interface IPropsBoxComponent {
  children?: JSX.Element,
  css: {
    [key:string]: string | object | number | "backgroundColor" | "backgroundHover"
  }
}

const BoxComponent: React.FC<IPropsBoxComponent> = ({ css, children }) => {
  console.log(css);
  return (
    <Container css={css}>
      {children}
    </Container>
  );
}

export default BoxComponent;