const ProjectsLoading = () => {
	return (
		<div className="-mx-4 flex items-stretch justify-center flex-wrap">
			{/* generate 6 of these */}
			{[...Array(8)].map((_, i) => (
				<div className="shrink-0 w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4 animate-pulse" key={i}>
					<div className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]">
						<div className="relative mb-5 overflow-hidden rounded-lg">
							<div className="w-full bg-bg-color rounded-lg object-cover aspect-video" />
						</div>
						<div>
							<div className="mb-3 w-3 h-[1.5rem] inline-block text-lg font-semibold text-white hover:text-primary"></div>
							<div className="flex items-center justify-between border-t-2 border-bg-color pt-5">
								<div className="flex items-center justify-center rounded-md w-4 h-[2.75rem] py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"></div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectsLoading;
