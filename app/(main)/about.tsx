import { Text, Box, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

import CircleAnimation from '../components/circle-animation';

const About = () => {
	return (
		<Box>
			<CircleAnimation color='red'>
				<Text
					fontSize='xl'
					fontWeight='bold'
					textDecoration='underline'
					mb={4}>
					About
				</Text>
			</CircleAnimation>
			<Text
				fontSize='sm'
				textIndent='2em'
				textAlign='justify'>
				Hello, my name is Kacper, and I am an aspiring web developer currently
				living in the city of Opole, Poland. I am in my third year of studying
				Computer Science at the Opole University of Technology. My main interest
				lies in web dev, web security and authentication methods. I also try to
				learn more about Large language models and AI in general. In my work i
				mainly use TypeScript, Golang & Python.
			</Text>
			<Box
				display={'flex'}
				justifyContent={'flex-end'}
				py={2}>
				<Button
					leftIcon={<DownloadIcon />}
					variant='solid'>
					CV
				</Button>
			</Box>
		</Box>
	);
};

export default About;
