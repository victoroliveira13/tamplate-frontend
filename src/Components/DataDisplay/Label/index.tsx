import React from 'react';

import { Container } from './styles';

interface IPropsLabel {
  children: string,
  size?: string,
  variant?: "active" | "inactive",
}

const Label: React.FC<IPropsLabel> = ({
  children,
  size,
  variant,
}) => {
  return (
    <Container size={size} variant={variant}>
      {children}
    </Container>
  );
}

export default Label;