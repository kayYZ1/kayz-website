'use client'

import { Link } from '@chakra-ui/react'
import {
  Box,
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'dark.700')}
      color={useColorModeValue('gray.700', 'gray.200')}
      marginTop={5}
    >
      <Container
        maxW={'6xl'}
        py={4}
        alignItems={"center"}>
        <Text><Link href="https://github.com/kayYZ1" isExternal>https://github.com/kayYZ1</Link></Text>
      </Container>
    </Box>
  )
}
