import { Text, Box, UnorderedList, ListItem } from '@chakra-ui/react';
import CircleAnimation from '../components/circle-animation';

const Bio = () => {
	return (
		<Box>
			<CircleAnimation color='#1E90FF'>
				<Text
					fontSize='xl'
					fontWeight='bold'
					textDecoration='underline'
					mb={4}>
					Bio
				</Text>
			</CircleAnimation>
			<UnorderedList
				spacing={2}
				styleType='none'
				ml={0}
				fontSize='sm'>
				<ListItem
					display='flex'
					alignItems='center'>
					<Box
						as='span'
						mr={2}
						color='blue.500'>
						•
					</Box>
					Born in Opole, Poland in 2001
				</ListItem>
				<ListItem
					display='flex'
					alignItems='center'>
					<Box
						as='span'
						mr={2}
						color='blue.500'>
						•
					</Box>
					Graduated high school in 2020
				</ListItem>
				<ListItem
					display='flex'
					alignItems='center'>
					<Box
						as='span'
						mr={2}
						color='blue.500'>
						•
					</Box>
					Enrolled in Computer Science at Opole University of Technology
					2021-2025
				</ListItem>
				<ListItem
					display='flex'
					alignItems='center'>
					<Box
						as='span'
						mr={2}
						color='blue.500'>
						•
					</Box>
					Currently looking for work / internship
				</ListItem>
			</UnorderedList>
		</Box>
	);
};

export default Bio;
