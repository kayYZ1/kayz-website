'use client'

import {
  Container,
  Text,
  IconButton,
  HStack,
  Box
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      position="absolute"
      bottom={0}
      py={4}
    >
      <Container
        maxW={"container.md"}
      >
        <HStack display="flex" justifyContent="space-between">
          <Text fontSize="sm">
            @2024 kayz
          </Text>
          <Box>
            <IconButton
              size="sm"
              as="a"
              href="https://github.com/kayYZ1"
              aria-label="GitHub"
              icon={<FaGithub />}
              ml={2}
            />

            <IconButton
              size="sm"
              as="a"
              href="https://www.linkedin.com/in/your-linkedin-profile"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              ml={2}
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
