import React from 'react';

import { Container } from './styles';

//options autocomplete
import { loadLists } from './data';
import SelectionField from '../../Components/Form/SelectionField';
const Data = loadLists();

const Home: React.FC = () => {
  return (
    <Container>
      <SelectionField  data={Data}/>
    </Container>
  );
}

export default Home;