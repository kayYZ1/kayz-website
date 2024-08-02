import Footer from "./components/footer";
import Intro from "./components/intro";

import * as React from 'react';

import { Flex } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="90vh">
      <Intro />
      <Footer />
    </Flex>
  )
};

export default Home;
