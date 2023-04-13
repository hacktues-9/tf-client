import { Creator } from '@/app/projects/[projectId]/page';

const Creators = ({ creators }: { creators: Creator[] }) => (
	<div className="w-full max-w-screen-lg">
		<div className="bg-bg-color rounded-xl border-2 border-border">
			<div className="px-8 py-4 flex flex-col gap-4">
				<div className="flex gap-4 flex-wrap items-center justify-center">
					{creators.map((creator) => (
						<div
							key={creator.name}
							className="md:w-[calc(50%-1rem)] w-full flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
						>
							<p className="w-full text-center whitespace-pre-line break-before-avoid flex flex-col gap-1 sm:block">
								{creator.name} <span className="text-sm opacity-70">от {creator.class} клас</span>
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);

export default Creators;
