import { Container, Text, IconButton, HStack, Box } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
	return (
		<Box
			as='footer'
			w='100%'>
			<Container maxW={'container.md'}>
				<HStack
					display='flex'
					justifyContent='space-between'>
					<Text
						fontSize='sm'
						pt={2}>
						@2024 kayz
					</Text>
					<Box>
						<IconButton
							size='sm'
							as='a'
							target='_blank'
							href='https://github.com/kayYZ1'
							aria-label='GitHub'
							icon={<FaGithub />}
							ml={2}
						/>

						<IconButton
							size='sm'
							as='a'
							target='_blank'
							href='https://www.linkedin.com/in/kacper-manczyk/'
							aria-label='LinkedIn'
							icon={<FaLinkedin />}
							ml={2}
						/>
					</Box>
				</HStack>
			</Container>
		</Box>
	);
}
