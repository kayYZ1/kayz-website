import { Box, ListItem, UnorderedList, Text, VStack, Link } from "@chakra-ui/react"
import CircleAnimation from "../components/circle-animation"

const Packages = () => {
  return (
    <Box pt={12}>
      <CircleAnimation color="green">
        <Text fontSize="xl" fontWeight="bold" textDecoration="underline" mb={4}>
          Packages
        </Text>
      </CircleAnimation>
      <UnorderedList>
        <ListItem>
          <Text fontSize="lg">simple-generic-avatar</Text>
          <Text fontSize="md" py={1}>
            Simple npm package that generates an rounded avatar based on name and surname initials.
          </Text>
          <VStack alignItems="flex-start">
            <Link href="https://www.npmjs.com/package/simple-generic-avatar" isExternal>
              https://www.npmjs.com/package/simple-generic-avatar
            </Link>
          </VStack>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default Packages