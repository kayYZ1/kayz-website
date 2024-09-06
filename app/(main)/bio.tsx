import { Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import CircleAnimation from "../components/circle-animation"

const Bio = () => {
  return (
    <Box>
      <CircleAnimation color="#1E90FF">
        <Text fontSize="xl" fontWeight="bold" textDecoration="underline" mb={4}>
          Bio
        </Text>
      </CircleAnimation>
      <UnorderedList spacing={2} styleType="none" ml={0} fontSize="sm">
        <ListItem display="flex" alignItems="center">
          <Box as="span" mr={2} color="blue.500">•</Box>
          Born in Opole, Poland in 1999
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Box as="span" mr={2} color="blue.500">•</Box>
          Started coding at the age of 5
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Box as="span" mr={2} color="blue.500">•</Box>
          Graduated high school with honors in 2018
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Box as="span" mr={2} color="blue.500">•</Box>
          Enrolled in Computer Science at Opole University of Technology
        </ListItem>
        <ListItem display="flex" alignItems="center">
          <Box as="span" mr={2} color="blue.500">•</Box>
          Completed first internship as a junior web developer in 2022
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default Bio