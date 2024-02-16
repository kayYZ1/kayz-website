'use client'

import {
  Box,
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      marginTop={5}
    >
      <Container
        maxW={'6xl'}
        py={4}
        alignItems={"center"}>
        <Text>@ 2024 https://github.com/kayYZ1. All rights reserved</Text>
      </Container>
    </Box>
  )
}
