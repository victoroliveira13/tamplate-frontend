import React from 'react';
import { MdAdd } from 'react-icons/md';
import IconButton from '../../Components/Form/IconButton';


import { Container } from './styles';


const Home: React.FC = () => {
  return (
    <Container>
      <IconButton icon={<MdAdd />}  size='lg'  onClick={() => console.log('clicado')}/>
    </Container>
  );
}

export default Home;