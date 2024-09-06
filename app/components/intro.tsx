import { Box, Text, WrapItem, HStack } from "@chakra-ui/react";

import avatar from "@/public/pixel-cat.png"
import Image from "next/image";

const Intro: React.FC = () => {
  return (
    <Box w="100%" p={2} display="flex">
      <HStack spacing="24px">
        <WrapItem>
          <Image src={avatar} alt="avatar image" width={128} height={128} />
        </WrapItem>
        <Box>
          <Text fontSize='xl'>Kacper</Text>
          <Text fontSize='sm'>Jr. Software Developer (Hopefully)</Text>
        </Box>
      </HStack>
    </Box>
  )
};

export default Intro;
