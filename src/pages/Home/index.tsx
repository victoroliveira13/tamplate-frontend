import React from 'react';

import Text from '../../Components/Typography/Text';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Text size='md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc eu mi efficitur porta. Sed porta velit et luctus tempor.</Text>
    </Container>
  );
}

export default Home;