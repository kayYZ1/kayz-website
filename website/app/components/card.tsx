import { Card, Image, CardBody, CardFooter, Button, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { IProjectInfo } from "../app.interfaces";

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
          <Button variant='solid' colorScheme='blue'>
            Buy Latte
          </Button>
          {demoLink !== "" ?
            <Link href={demoLink} isExternal><Button variant='solid' colorScheme="gray" marginLeft={3}>Demo</Button></Link>
            : ""
          }
        </CardFooter>
      </Stack>
    </Card>
  )
};

export default CardComponent;
