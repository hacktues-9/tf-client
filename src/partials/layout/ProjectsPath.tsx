'use client';

import Link from 'next/link';

const ProjectsPath = async ({
	path,
}: {
	path: {
		name: string;
		url: string;
	}[];
}) => {
	// if (!path) return null;

	return (
		<section className="pt-[150px]">
			<div className="container">
				<div className="rounded-lg border-2 border-stroke bg-bg-color py-5 px-8">
					<ul className="flex items-center">
						{path.map((item) => (
							<li key={item.url} className="flex items-center text-base font-medium text-white">
								{item.url ? (
									<>
										<Link
											href={item.url || '#'}
											className={`text-white ${item.url && 'hover:text-primary'}`}
										>
											{item.name}
										</Link>
										<span className="px-3"> / </span>
									</>
								) : (
									<li className="flex items-center text-base font-medium text-white">Проекти</li>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProjectsPath;
