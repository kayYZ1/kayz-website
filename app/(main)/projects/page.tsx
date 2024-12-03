import GridItem from '@/app/components/grid-item';
import { Project } from '@/app/ts/types';
import { SimpleGrid } from '@chakra-ui/react';

import awsScraper from '@/public/aws-scraper.png';
import quarkPrj from '@/public/quark-prj.png';
import angularMap from '@/public/angular-map.png';
import evStations from '@/public/ev-stations.png';
import lerng from '@/public/lerng.png';

const projects: Project[] = [
	{
		id: 6,
		title: 'LERNG',
		desc: 'Fully functional e-learning platform for learning more about linux systems.',
		link: 'https://github.com/kayYZ1/lerng-frontend',
		image: lerng,
	},
	{
		id: 3,
		title: 'Quark - Workplace communicator',
		desc: "Quark is a web app that allows it's user to send messages between each other in real-time and many more.",
		link: 'https://github.com/kayYZ1/Quark-Frontend',
		image: quarkPrj,
	},
	{
		id: 4,
		title: 'AWS Article Web Scraping Tool',
		desc: 'Application that uses web scraping to fetch articles from different websites given certain query.',
		link: 'https://github.com/kayYZ1/Article-Scraping',
		image: awsScraper,
	},
	{
		id: 1,
		title: 'Interactive map of Opole for Tourists',
		desc: 'Web application made with Angular that showcase various objects to visit in Opole (Poland).',
		link: 'https://github.com/kayYZ1/angular-interactive-map',
		image: angularMap,
	},
	{
		id: 5,
		title: 'EV Stations Poland',
		desc: 'Application that displays the ev stations for all the major cities. Written in NextJS.',
		link: 'https://github.com/kayYZ1/ev-stations',
		image: evStations,
	},
];

const Projects = () => {
	return (
		<SimpleGrid
			columns={{ base: 1, md: 2 }}
			spacing={4}
			fontWeight='300'
			overflow='auto'
			paddingRight={4}
			maxHeight={650}
			sx={{
				'::-webkit-scrollbar': {
					display: 'none',
				},
				msOverflowStyle: 'none',
				scrollbarWidth: 'none',
			}}>
			{projects.map((project) => (
				<GridItem
					{...project}
					key={project.id}
				/>
			))}
		</SimpleGrid>
	);
};

export default Projects;
