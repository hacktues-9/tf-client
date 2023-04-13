'use client';

import Link from 'next/link';
import { use, useEffect } from 'react';

const ProjectsPath = ({
	path,
}: {
	path:
		| {
				name: string;
				url: string;
		  }[]
		| null
		| undefined;
}) => {
	if (!path) return null;

	return (
		<section className="pt-28">
			<div className="container">
				<div className="rounded-lg border-2 border-stroke bg-bg-color py-5 px-8">
					<ul className="flex items-cente text-ellipsis  flex-wrap gap-3">
						{path.map((item) => (
							<>
								{item?.url ? (
									<>
										<Link
											key={item?.url}
											href={item?.url || '#'}
											className={`text-white ${item?.url && 'hover:text-primary'}`}
										>
											<li className="flex items-center text-base font-medium text-white">
												{item?.name}
												<span className="pl-3"> / </span>
											</li>
										</Link>
									</>
								) : (
									<li key={'end'} className="flex items-center text-base font-medium text-white">
										{item?.name}
									</li>
								)}
							</>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProjectsPath;
