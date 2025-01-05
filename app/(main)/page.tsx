'use client';
import { Box } from '@chakra-ui/react';

import About from './about';
import Bio from './bio';
import Packages from './packages';

const Main = () => {
	return (
		<Box px={1}>
			<About />
			<Bio />
		</Box>
	);
};

export default Main;
