import ComingSoon from '@/partials/projects/ComingSoon';
import Link from 'next/link';
import { Suspense } from 'react';

export interface Project {
	id: string;
	name: string;
	thumbnail: string;
	category: string;
}

async function getProjects() {
	// const res = await fetch('https://api.tuesfest.bg/v1/get/projects');
	const res = await fetch('http://localhost:3001/test/data/projects.json');

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	const projects: Project[] = await res.json();

	return projects;
}

const ProjectsLoading = () => {
	return <div>Loading...</div>;
};

const ProjectsPage = async () => {
	const projects: Project[] = await getProjects();

	if (!projects?.length) return <ComingSoon />;

	return (
		<Suspense fallback={<ProjectsLoading />}>
			<div>
				{projects.map((project) => (
					<Link key={project.id} href={`/projects/${project.id}`}>
						<h1>{project.name}</h1>
						<img src={project.thumbnail} />
						<p>{project.category}</p>
					</Link>
				))}
			</div>
		</Suspense>
	);
};

export default ProjectsPage;
