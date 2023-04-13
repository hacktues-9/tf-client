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
	const res = await fetch(`https://api.tuesfest.bg/v1/get/project/${id}`, { cache: 'no-store' });

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	const project: Project = await res.json();
	console.warn(project);

	return project;
};

export async function generateMetadata({
	params,
	searchParams,
}: {
	params: { projectId: string };
	searchParams: URLSearchParams;
}) {
	const project = await getProject(params.projectId);
	return { title: project.name };
}

const ProjectPage = () => {
	<div>
		<h1>Project Page</h1>
	</div>;
};

export default ProjectPage;
