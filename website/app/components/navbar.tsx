'use client'

import {
	Box,
	Flex,
	HStack,
	IconButton,
	useColorMode,
	useColorModeValue,
	Stack,
	Button,
	Heading,
	Container,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
	children: React.ReactNode
}

const Links = ['Intro', 'Projects']

const NavLink = (props: Props) => {
	const { children } = props

	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700'),
			}}
			href={'#'}>
			{children}
		</Box>
	)
}

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box position={"fixed"} as="nav" w="100%" bg={useColorModeValue('gray.100', 'gray.900')} css={{ backdropFilter: 'blur(10px)' }}
			zIndex={2}>
			<Container display={"flex"} p={2} maxW={"container.md"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-between"}>
				<Flex align={"center"} mr={5}>
					<Heading as="h2" size="medium">
						Portfiolio website
					</Heading>
				</Flex>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</HStack>
				</Stack>
				<Box flex={1} alignItems="right">
					<Button onClick={toggleColorMode}>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu isLazy id="nav-menu">
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								{Links.map((link) => (
									<MenuItem key={link}>
										<NavLink>{link}</NavLink>
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}
