import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ProjectsPath from '@/partials/layout/ProjectsPath';

import MainInfo from '@/partials/projects/project/MainInfo';
import Gallery from '@/partials/projects/project/Gallery';
import Description from '@/partials/projects/project/Description';
import LinksContainer from '@/partials/projects/project/Links';
import Creators from '@/partials/projects/project/Creators';

export type Links = {
	github: string;
	demo: string;
};

export type Creator = {
	name: string;
	class: string;
};

export type Picture = {
	url: string;
	is_thumbnail: boolean;
};

export type Project = {
	id: number;
	name: string;
	description: string;
	video: string;
	type: string;
	category: string;
	has_thumbnail: boolean;
	links: Links;
	creators: Creator[];
	pictures: Picture[];
};

const getProject = async (id: string) => {
	const res = await fetch(`https://api.tuesfest.bg/v1/get/project/${id}`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	const project: Project = await res.json();
	// console.warn(project);

	return project;
};

export async function generateMetadata({ params }: { params: { projectId: string } }) {
	const project = await getProject(params.projectId);

	const images = project.pictures?.map((picture) => ({
		url: picture.url,
		is_thumbnail: picture.is_thumbnail,
	}));

	// sort by is_thumbnail - true first
	images?.sort((a, b) => (a.is_thumbnail ? -1 : 1));

	// TODO: add more metadata + image - thumbnail or first picture
	return {
		title: project.name,
		description: project.description,
		twitter: {
			card: 'summary_large_image',
			title: `${project.name} | TUES Fest 2023`,
			description: project.description,
			creator: '@tuesfest',
			images: images?.map((image) => ({
				url: image.url,
			})),
		},
		openGraph: {
			title: `${project.name} | TUES Fest 2023`,
			description: project.description,
			url: `https://tuesfest.bg/projects/${project.id}`,
			siteName: 'TUES Fest 2023',
			images: images?.map((image) => ({
				url: image.url,
			})),
			locale: 'bg-BG',
			type: 'website',
		},
	};
}

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
	const project = await getProject(params.projectId);

	if (project === undefined || project === null || project.id === 0) notFound();

	const path = [
		{
			name: 'TUES Fest 2023',
			url: '/',
		},
		{
			name: 'Проекти',
			url: '/projects',
		},
		{
			name: project.name,
			url: '',
		},
	];

	return (
		<div className="pb-8">
			<Suspense fallback={<div>Loading...</div>}>
				<ProjectsPath path={path} />
			</Suspense>

			<div className="container pt-8 flex flex-col gap-4 items-center">
				<MainInfo {...project} />
				<Gallery {...project} />
				<Description {...project} />
				<LinksContainer {...project} />
				<Creators {...project} />
			</div>
		</div>
	);
};

export default ProjectPage;
