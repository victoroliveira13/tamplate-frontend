import React from 'react';
import { MdBackspace } from 'react-icons/md';
import Autocomplete from '../../Components/Form/Autocomplete';

import { Container } from './styles';

//options autocomplete
import { loadLists } from './data';
const Data = loadLists();

const Home: React.FC = () => {
  return (
    <Container>
      <Autocomplete backspace={<MdBackspace />} data={Data} defaultValue="Masculino"/>
    </Container>
  );
}

export default Home;