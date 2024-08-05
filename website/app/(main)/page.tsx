"use client"

import { Text, Box, Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const Main = () => {
  return (
    <Box px={1}>
      <Text fontSize="md">
        Hello, my name is Kacper. And i am an aspiring web developer living in Opole.
        I am currently in my 3rd year studying Computer Science at Opole University Of Technology.
      </Text>
      <Box display={"flex"} justifyContent={"flex-end"} py={2}>
        <Button leftIcon={<DownloadIcon />} variant='solid'>
          CV
        </Button>
      </Box>
    </Box>
  )
}

export default Main