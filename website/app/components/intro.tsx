"use client"

import { Box, Avatar, Text, WrapItem, HStack } from "@chakra-ui/react";

const Intro: React.FC = () => {
  return (
    <Box w="100%" p={2} display="flex">
      <HStack spacing="24px">
        <WrapItem>
          <Avatar size="xl" name="gh-avatar"
            src="https://avatars.githubusercontent.com/u/106306274?s=400&u=cc5ee13eeb28a2385bb361d395d506a14ea6a792&v=4" />
        </WrapItem>
        <Box>
          <Text fontSize='xl'>Kacper</Text>
          <Text fontSize='sm'>Jr Software Developer</Text>
        </Box>
      </HStack>
    </Box >
  )
};

export default Intro;
