"use client"

import { Box, Avatar, Text, WrapItem, HStack } from "@chakra-ui/react";

const Intro: React.FC = () => {
  return (
    <Box w="100%" p={2} display="flex">
      <HStack spacing="24px">
        <WrapItem>
          <Avatar size="xl" name="avi placeholder" />
        </WrapItem>
        <Box>
          <Text fontSize='xl'>Kacper</Text>
          <Text fontSize='sm'>Jr. Software Developer (Hopefully)</Text>
        </Box>
      </HStack>
    </Box >
  )
};

export default Intro;
