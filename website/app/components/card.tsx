"use client"

import { Card, Image, CardBody, CardFooter, Button, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { IProjectInfo } from "../interfaces";

const CardComponent = ({ title, description, image, githubLinks, demoLink }: IProjectInfo) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      marginTop={5}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '250px' }}
        src={image}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>

          <Text py='2' fontSize="smaller">
            {description}
          </Text>
        </CardBody>

        <CardFooter>
          {githubLinks.length > 1 ?
            githubLinks.map((link, index) =>
              <Link href={link} key={index} isExternal>
                <Button colorScheme="blue" marginLeft={3}>Link #{index}</Button>
              </Link>)
            : <Link href={githubLinks[0]} isExternal><Button colorScheme="blue" marginLeft={3}>Link</Button></Link>
          }
          {demoLink !== "" ?
            <Link href={demoLink} isExternal><Button colorScheme="gray" marginLeft={3}>Demo</Button></Link>
            : ""
          }
        </CardFooter>
      </Stack>
    </Card>
  )
};

export default CardComponent;
