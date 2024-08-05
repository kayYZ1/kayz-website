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
        href="#"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={300}
          style={{ borderRadius: 15 }}
        />
        <LinkOverlay as="div" href="#">
          <Text mt={2} fontSize={18}>
            {project.title}
          </Text>
        </LinkOverlay>
        <Text fontSize={12}>{project.desc}</Text>
      </LinkBox>
    </Box>
  )
}

export default GridItem