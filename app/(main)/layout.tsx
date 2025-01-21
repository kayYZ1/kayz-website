import React from 'react';
import { Flex } from '@chakra-ui/react';
import Intro from '../components/intro';

export default async function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Flex
			direction='column'
			minH='87vh'>
			<Flex
				direction='column'
				py={5}>
				{children}
			</Flex>
		</Flex>
	);
}
