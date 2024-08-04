import * as React from 'react';
import { Flex } from "@chakra-ui/react";

import Intro from './components/intro';

const Home = () => {
  return (
    <Flex direction="column" minH="90vh">
      <Intro />
    </Flex>
  )
};

export default Home;
