import Link from 'next/link';
import Image from 'next/image';

import { TbBrandYoutube } from 'react-icons/tb';

export interface Project {
	id: string;
	name: string;
	thumbnail: string;
	video: string;
	category: string;
}

async function getProjects() {
	const res = await fetch('https://api.tuesfest.bg/v1/get/projects' /* { cache: 'no-store' } */);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	const projects: Project[] = await res.json();
	console.warn(projects);

	return projects;
}

const Projects = async () => {
	const projects: Project[] = await getProjects();

	if (!projects.length) return null;

	return (
		<div className="-mx-4 flex items-stretch justify-center flex-wrap">
			{projects.map((project) => (
				<div className="shrink-0 w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4" key={project.name}>
					<div className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]">
						<div className="relative mb-5 overflow-hidden rounded-lg">
							<Image
								src={project.thumbnail}
								alt={project.name}
								width={1280}
								height={720}
								className="bg-dark rounded-lg object-cover aspect-video"
							/>
						</div>
						<div>
							<h3>
								<Link
									href={`/projects/${project.id}`}
									title={project.name}
									className={`mb-3 inline-block text-lg font-semibold text-white hover:text-primary line-clamp-1`}
								>
									{project.name}
								</Link>
							</h3>

							<div className="flex items-center justify-between border-t-2 border-stroke pt-5">
								<Link
									href={`/projects/${project.id}`}
									className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
								>
									Виж проекта {/* TODO: change to vode, on 23 april */}
								</Link>
								<Link
									href={project.video}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center rounded-md text-sm font-semibold text-white hover:text-primary sm:px-5"
								>
									<TbBrandYoutube size={32} />
								</Link>

								{/* When voting - use this as 'view project' */}
								{/* <a
												href="javascript:void(0)"
												className="flex items-center justify-center rounded-md py-3 px-4 text-sm font-semibold text-white hover:text-primary sm:px-5"
											>
												<span className="pr-1">
													<svg
														width="18"
														height="18"
														viewBox="0 0 18 18"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z"
															fill="currentColor"
														/>
													</svg>
												</span>
												Виж проекта
											</a> */}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
