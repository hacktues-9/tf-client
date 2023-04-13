import ProjectsPath from '@/partials/layout/ProjectsPath';

const PATH: {
	name: string;
	url: string;
}[] = [
	{
		name: 'TUES Fest 2023',
		url: '/',
	},
	{
		name: 'Проекти',
		url: '/projects',
	},
];

const ProjectLoading = () => {
	return <ProjectsPath path={PATH} />;
};

export default ProjectLoading;
