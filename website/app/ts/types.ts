import { StaticImageData } from 'next/image';

export type Project = {
	id: number;
	title: string;
	desc: string;
	link: string;
	image: StaticImageData;
};
