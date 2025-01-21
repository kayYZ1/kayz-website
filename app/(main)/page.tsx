'use client';
import { Box } from '@chakra-ui/react';

import About from './about';
import Bio from './bio';

import Intro from '../components/intro';

const Main = () => {
	return (
		<Box px={1}>
			<Intro />
			<About />
			<Bio />
		</Box>
	);
};

export default Main;
