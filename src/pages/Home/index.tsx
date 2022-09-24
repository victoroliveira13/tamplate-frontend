import React from 'react';
import Heading from '../../Components/Typography/Heading';
import Text from '../../Components/Typography/Text';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Heading>Title</Heading>
      <Text>ipsen liren dolor</Text>
    </Container>
  );
}

export default Home;