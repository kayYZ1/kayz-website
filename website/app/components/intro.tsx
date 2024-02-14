"use client"

import { StarIcon } from '@chakra-ui/icons';
import { Heading, Box, List, Text, ListItem, ListIcon, Link } from '@chakra-ui/react';

const Intro: React.FC = () => {
  return (
    <div>
      <Heading as="h2" size="2xl" fontWeight={300}>
        Introduction
      </Heading>
      <Box paddingTop={5}>
        <p style={{ textIndent: "25px" }}>Hello, my name is Kacper and I am an aspiring web developer living in Opole, Poland.
          Currently, in my 3rd year studying Computer Science at Opole University Of Technology. </p>
        <br></br>
        <p>Please feel free to check out my
          <Link href='https://github.com/kayYZ1' isExternal paddingLeft={"3px"} paddingRight={"3px"}>
            Github
          </Link>
          and
          <Link href='https://www.linkedin.com/in/kacper-manczyk/' isExternal paddingLeft={"3px"}>
            LinkedIn
          </Link>
        </p>
      </Box>
      <Heading as="h2" size="2xl" fontWeight={300} paddingTop={5}>
        Skills
      </Heading>
      <Box paddingTop={5}>
        <Text fontSize={"medium"}>Frontend</Text>
        <List spacing={3} paddingLeft={2} paddingTop={2}>
          <ListItem>
            <ListIcon as={StarIcon} />
            TypeScript, JavaScript, HTML, CSS.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} />
            React, Angular and to some extent Vue.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} />
            Familiarity with Bootstrap, TailwindCSS and Material components libraries such as MaterialUI, AntDesign or ChakraUI.
          </ListItem>
        </List>
        <Box paddingTop={3}>
          <p style={{ textIndent: "25px" }}>While working on side projects, I mainly use React with TypeScript
            but thanks to my recent usage of NestJS i indirectly managed to hone my Angular basics.</p>
        </Box>
        <Text fontSize={"medium"} paddingTop={5}>Backend</Text>
        <List spacing={3} paddingLeft={2} paddingTop={2}>
          <ListItem>
            <ListIcon as={StarIcon} />
            Familiarity with C# ASP.NET Core and WPF.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} />
            Knowledge of TypeScript backend frameworks such as NodeJS(Express) and NestJS.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} />
            Familiar with relational databases: PostgreSQL and MySQL and non-relational databases, mainly MongoDB.
          </ListItem>
        </List>
        <Text fontSize={"medium"} paddingTop={5}>CI/CD, Testing</Text>
        <List spacing={3} paddingLeft={2} paddingTop={2}>
          <ListItem>
            <ListIcon as={StarIcon} />
            In terms of CI/CD i mainly use Github Actions, but I also wrote pipelines in Jenkins.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon} />
            For testing applications i usually used Jest for both Backend and Frontend.
          </ListItem>
        </List>
      </Box>
    </div>
  )
};

export default Intro;
