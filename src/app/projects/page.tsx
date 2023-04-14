import { Suspense } from 'react';

import Projects from '@/partials/projects/Projects';
import ProjectsLoading from '@/partials/projects/loader/ProjectsLoading';
import ProjectsPath from '@/partials/layout/ProjectsPath';
import Link from 'next/link';

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
		url: '',
	},
];

const TABS = [
	{
		text: 'Всички',
		href: '/projects',
	},
	{
		text: 'Хардуер',
		href: '/projects/category/embedded',
	},
	{
		text: 'Софтуер',
		href: '/projects/category/software',
	},
	{
		text: 'Battle Bots',
		href: '/projects/category/battlebot',
	},
	{
		text: 'Мрежи',
		href: '/projects/category/networks',
	},
];

const LinkTab = ({ text, href, current }: { text: string; href: string; current: boolean }) => (
	<Link
		href={href}
		className={`inline-flex items-center justify-center whitespace-nowrap rounded-md ${
			current ? 'bg-primary' : 'bg-[#353444]'
		} py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary`}
	>
		{text}
	</Link>
);

const ProjectsPage = () => {
	return (
		<div className="">
			<ProjectsPath path={PATH} />
			<div className="container">
				<section className="-mx-4 pt-8">
					<div className="container">
						<div className="mb-14 rounded-lg border-2 border-stroke py-4 px-5">
							<div className="-mx-4 flex flex-wrap items-center justify-between">
								<div className="w-full px-4">
									<div className="flex flex-wrap gap-4 justify-center lg:justify-start overflow-x-auto">
										{TABS.map((tab) => (
											<LinkTab key={tab.href} {...tab} current={tab.text === 'Всички'} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <ErrorBoundary FallbackComponent={ProjectsError}> */}
				<Suspense fallback={<ProjectsLoading />}>
					{/* @ts-expect-error Server Component */}
					<Projects category='all' />
				</Suspense>
				{/* </ErrorBoundary> */}
			</div>
		</div>
	);
};

export default ProjectsPage;
