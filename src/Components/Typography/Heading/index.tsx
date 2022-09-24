import React from 'react';

import { Container } from './styles';

interface IPropsHeading {
  children: string,
  size?: "sm" | "md" | "lg" | "xl" | "2xl",
}

const Heading: React.FC<IPropsHeading> = ({ children, size }) => {
  return (
    <Container size={size}>
      {children }
    </Container>
  );
}

export default Heading;