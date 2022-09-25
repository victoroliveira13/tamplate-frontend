import React from 'react';
import { MdPerson } from 'react-icons/md';
import TextField from '../../Components/Form/TextField';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <TextField placeholder='Placeholder' leftIcon={<MdPerson />} />
    </Container>
  );
}

export default Home;