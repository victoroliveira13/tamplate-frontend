import React from 'react';
import LinkButton from '../../Components/Form/LinkButton';
import TextField from '../../Components/Form/TextField';
import { Md11Mp } from 'react-icons/md'

import { Container } from './styles';


const Home: React.FC = () => {
  return (
    <Container>
      <LinkButton to='/' label='label' leftIcon={<Md11Mp />} />
    </Container>
  );
}

export default Home;