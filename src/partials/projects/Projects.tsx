'use server';

import Link from 'next/link';
import Image from 'next/image';

import { TbBrandYoutube } from 'react-icons/tb';
import { redirect } from 'next/navigation';
import Project from './project/Project';

export interface Project {
	id: number;
	name: string;
	thumbnail: string;
	video: string;
	category: string;
}

const getProjects = async (category: string): Promise<Project[]> => {
	if (!['software', 'embedded', 'battlebot', 'networks', 'all'].includes(category)) redirect('/projects');

	// load from static file in public directory

	const url = `https://2023.tuesfest.bg/data/projects${category === 'all' ? '' : '/' + category}.json`;
	console.warn(url);

	const res = await fetch(url);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data', {
			cause: {
				status: res.status,
				statusText: res.statusText,
				url: res.url,
				debug: {
					url: url,
					category: category,
				},
			},
		});
	}

	const projects: Project[] = await res.json();

	return projects;
};

const Projects = async ({ category }: { category: string }) => {
	if (!['software', 'embedded', 'battlebot', 'networks', 'all'].includes(category)) redirect('/projects');

	const projects: Project[] = await getProjects(category);

	if (!projects || !projects?.length) return null;

	return (
		<div className="-mx-4 flex items-stretch justify-center flex-wrap">
			{projects.map((project) => (
				// @ts-ignore
				<Project key={project.id} category={category} {...project} />
			))}
		</div>
	);
};

export default Projects;
