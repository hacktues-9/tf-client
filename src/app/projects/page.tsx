import Link from 'next/link';

import { Suspense } from 'react';

import Projects from '@/partials/projects/Projects';
import ProjectsLoading from '@/partials/projects/loader/ProjectsLoading';

const ProjectsPage = () => {
	return (
		<div className="">
			<section className="pt-[150px]">
				<div className="container">
					<div className="rounded-lg border-2 border-stroke bg-bg-color py-5 px-8">
						<ul className="flex items-center">
							<li className="flex items-center text-base font-medium text-white">
								<Link href="/" className="text-white hover:text-primary">
									TUES Fest 2023
								</Link>
								<span className="px-3"> / </span>
							</li>
							<li className="flex items-center text-base font-medium text-white">Проекти</li>
						</ul>
					</div>
				</div>
			</section>
			<div className="container">
				<section className="-mx-4 pt-8">
					<div className="container">
						<div className="mb-14 rounded-lg border-2 border-stroke py-4 px-5">
							<div className="-mx-4 flex flex-wrap items-center justify-between">
								<div className="w-full px-4">
									<div className="flex flex-wrap gap-4 justify-center lg:justify-start overflow-x-auto">
										<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md  py-[10px] px-5 text-base font-semibold text-white transition-all bg-primary">
											Всички
										</button>
										<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary">
											Хардуер
										</button>
										<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary">
											Софтуер
										</button>
										<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary">
											Battle Bots
										</button>
										<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary">
											Мрежи
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <ErrorBoundary FallbackComponent={ProjectsError}> */}
				<Suspense fallback={<ProjectsLoading />}>
					{/* @ts-expect-error Server Component */}
					<Projects />
				</Suspense>
				{/* </ErrorBoundary> */}
			</div>
		</div>
	);
};

export default ProjectsPage;
