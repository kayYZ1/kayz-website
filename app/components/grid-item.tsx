import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkOverlay, LinkBox } from '@chakra-ui/react'

import { Project } from '../ts/types'

export const GridItem = (project: Project) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        as={NextLink}
        cursor="pointer"
        href={project.link}
      >
        <Image
          src={project.image}
          alt={project.title}
          style={{ borderRadius: 15 }}
        />
        <LinkOverlay as="div">
          <Text mt={2} fontSize={16}>
            {project.title}
          </Text>
        </LinkOverlay>
        <Text fontSize={12}>{project.desc}</Text>
      </LinkBox>
    </Box>
  )
}

export default GridItem