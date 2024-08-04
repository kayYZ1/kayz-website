'use client'

import {
	Box,
	HStack,
	IconButton,
	useColorMode,
	useColorModeValue,
	Stack,
	Button,
	Container,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

interface ILinks {
	id: number;
	link: string;
	name: string;
}

const Links = [{ id: 1, link: "about", name: "About" }, { id: 2, link: "work", name: "Work" }]

const NavLink = (props: ILinks) => {
	return (
		<Box
			as="div"
			px={2}
			py={1}
			rounded={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.600'),
			}}
		>
			<Link href={props.link}>
				{props.name}
			</Link>
		</Box>
	)
}

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box position={"fixed"} as="nav" w="100%" css={{ backdropFilter: 'blur(10px)' }}
			zIndex={2}>
			<Container display={"flex"} p={2} maxW={'3xl'} flexWrap={"wrap"} alignItems={"center"} justifyContent={"space-between"}>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'max-content' }}
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						{Links.map((Link) => <NavLink {...Link} key={Link.id} />)}
					</HStack>
				</Stack>
				<Box>
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
									<MenuItem key={link.id}>
										<NavLink {...link} key={link.id} />
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
