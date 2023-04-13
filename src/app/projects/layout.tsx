export const metadata = {
	title: {
		default: 'Проекти',
		template: '%s | ТУЕС Фест 2023',
	},
	description:
		'Тук може да откриете проектите на учениците на ТУЕС. Тази година над 120 проекта ще бъдат представени само на 23 април в София Тех Парк - форум Джон Атанасов.',
};

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen">
			{/* <h1>Projects</h1> */}
			{children}
		</div>
	);
};

export default ProjectsLayout;
