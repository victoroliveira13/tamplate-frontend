import React from 'react';

import BoxComponent from '../../Components/Layout/Box';
import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <Container>
      <BoxComponent
        css={{
          width: '20rem',
          height: '20rem',
          backgroundColor: 'shape-secondary',
          backgroundHover: 'shape-tertiary',
        }}
      >
        <label>Test</label>
      </BoxComponent>
    </Container>
  );
}

export default pages;