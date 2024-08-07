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
		url: '',
	},
];

const ProjectsLoading = () => {
	return (
		<div>
			<ProjectsPath path={PATH} />
			<div className="container">
				<section className="-mx-4 pt-8">
					<div className="container">
						<div className="mb-14 rounded-lg border-2 border-stroke py-4 px-5">
							<div className="-mx-4 flex flex-wrap items-center justify-between">
								<div className="w-full px-4">
									<div className="flex flex-wrap gap-4 justify-center lg:justify-start overflow-x-auto">
										<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-[#353444] py-[10px] px-5 text-base font-semibold text-white transition-all hover:bg-primary">
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
			</div>
		</div>
	);
};

export default ProjectsLoading;
