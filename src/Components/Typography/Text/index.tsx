import React from 'react';

import { Container } from './styles';

interface IPropsText {
  children: string,
  size?: 'xs' | 'sm' | 'md' | 'lg',
}

const Text: React.FC<IPropsText> = ({ children, size }) => {
  return (
    <Container size={size}>
      {children}
    </Container>
  );
}

export default Text;