import React from 'react';
import { MdPerson } from 'react-icons/md';

import Button from '../../Components/Form/Button';
import { Container } from './styles';

const pages: React.FC = () => {
  return (
    <Container>
      <Button leftIcon={<MdPerson/>}>
        LABEL
      </Button>
    </Container>
  );
}

export default pages;