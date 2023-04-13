import { CATEGORY } from '@/constants/projects/CATEGORY';
import { TYPE } from '@/constants/projects/TYPE';
import ProjectsPath from '@/partials/layout/ProjectsPath';
import Video from '@/partials/projects/project/Video';
import Link from 'next/link';
import { Suspense } from 'react';
import { TbBrandGithub, TbGlobe } from 'react-icons/tb';

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
	// TODO: add more metadata + image - thumbnail or first picture
	return { title: project.name };
}

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
	const project = await getProject(params.projectId);
	console.warn('AAAAAA', project.name);

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
				{/*  */}
				<ProjectsPath path={path} />
			</Suspense>

			<div className="container pt-8 flex flex-col gap-4 items-center">
				<div className="w-full flex gap-4 max-w-screen-lg">
					<div className="shrink w-full bg-bg-color rounded-xl border-2 border-border">
						{/* VIDEO */}

						<div className="aspect-video overflow-hidden rounded-xl border-b-2 border-b-border">
							<Video name={project.name} video={project.video} />
						</div>
						{/* NAME */}
						<div className="px-8 py-4 flex items-center justify-between">
							<h2 className="font-bold text-2xl">{project.name}</h2>
							<div className="text-sm text-right opacity-70">
								{TYPE[project.type]}, {CATEGORY[project.category]}
							</div>
						</div>
					</div>
					{/* 					<div className="relative h-full w-full flex flex-col bg-bg-color rounded-xl border-2 border-border">
						<div className="h-[calc(75%-2rem)] overflow-y-auto">
							<div className=" shrink-0 flex flex-col gap-4">
								<div className="flex flex-wrap p-4 gap-4 items-center justify-center">
									{project.pictures.map((picture) => (
										<div
											className="w-[calc(50%-1rem)] overflow-hidden rounded-xl border-2 border-border"
											key={picture.url}
										>
											<img
												src={picture.url}
												alt={project.name}
												className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
											/>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="w-full p-4 flex flex-col gap-4 absolute bottom-0">
							<div className="flex flex-col gap-4">
								<div className="flex gap-4">
									<a
										href={project.links.github}
										target="_blank"
										rel="noreferrer"
										className="w-full flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
										<span className="text-sm">GitHub</span>
									</a>
									<a
										href={project.links.demo}
										target="_blank"
										rel="noreferrer"
										className="w-full flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
										<span className="text-sm">Demo</span>
									</a>
								</div>
							</div>
						</div>
					</div> */}
				</div>
				<div className="max-w-screen-lg w-full relative h-64 flex flex-col bg-bg-color rounded-xl border-2 border-border">
					<div className="h-full">
						<div className="h-full shrink-0 flex flex-col gap-4">
							<div className="h-full flex overflow-x-auto p-4 gap-4 items-center justify-start">
								{project.pictures.map((picture) => (
									<div
										key={picture.url}
										className="h-full shrink-0 overflow-hidden !aspect-square rounded-xl border-2 border-border"
									>
										<img
											src={picture.url}
											alt={project.name}
											className="h-full shrink-0 !aspect-square object-cover hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-screen-lg">
					{/* DESCRIPTION */}
					<div className=" bg-bg-color rounded-xl border-2 border-border text-justify">
						<div className="px-8 py-4">
							<p className="text-md whitespace-pre-wrap">{project.description}</p>
						</div>
					</div>
				</div>
				<div className="w-full max-w-screen-lg">
					{/* LINKS */}
					<div className="bg-bg-color rounded-xl border-2 border-border">
						<div className="px-8 py-4 flex flex-col gap-4">
							<div className="flex gap-4">
								<Link
									href={project.links.github}
									target="_blank"
									rel="noreferrer"
									className="w-full flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
								>
									<TbBrandGithub size={28} />
									<span className="text-md font-semibold">GitHub</span>
								</Link>
								{project.links.demo && (
									<Link
										href={project.links.demo}
										target="_blank"
										rel="noreferrer"
										className="w-full flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
									>
										<TbGlobe size={28} />
										<span className="text-md font-semibold">Уебсайт</span>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-screen-lg">
					{/* LINKS */}
					<div className="bg-bg-color rounded-xl border-2 border-border">
						<div className="px-8 py-4 flex flex-col gap-4">
							<div className="flex gap-4 flex-wrap items-center justify-center">
								{project.creators.map((creator) => (
									<div
										key={creator.name}
										className="md:w-[calc(50%-1rem)] w-full flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
									>
										<p className="w-full text-center whitespace-pre-line break-before-avoid flex flex-col gap-1 sm:block">
											{creator.name} <span className='text-sm opacity-70'>от {creator.class} клас</span>
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
