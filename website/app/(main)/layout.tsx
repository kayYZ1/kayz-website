import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import Intro from '../components/intro';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex direction="column" minH="90vh">
      <Intro />
      <Container w="100%">
        {children}
      </Container>
    </Flex>
  );
}