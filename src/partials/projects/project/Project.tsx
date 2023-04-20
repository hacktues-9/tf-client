import Link from 'next/link';
import Image from 'next/image';
import { useVoteContext } from '@/context/vote';
import VoteButton from './VoteButton';

const Project = ({
	id,
	name,
	thumbnail,
	video,
	category,
}: {
	id: number;
	name: string;
	thumbnail: string;
	video?: string;
	category: string;
}) => {
	return (
		<div className="shrink-0 w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
			<div className="mb-10 rounded-xl border border-stroke bg-bg-color p-[18px]">
				<Link href={`/projects/${id}`}>
					<div className="aspect-video relative mb-5 overflow-hidden rounded-lg">
						<Image
							src={thumbnail}
							alt={name}
							width={1280}
							height={720}
							className="bg-dark rounded-lg object-cover aspect-video"
						/>
					</div>
				</Link>
				<div>
					<h3>
						<Link
							href={`/projects/${id}`}
							title={name}
							className={`mb-3 inline-block text-lg font-semibold text-white hover:text-primary line-clamp-1`}
						>
							{name}
						</Link>
					</h3>

					<div className="flex items-center justify-between border-t-2 border-stroke pt-5">
						<VoteButton id={id} name={name} thumbnail={thumbnail} category={category} />
						<Link
							href={`/projects/${id}`}
							className="flex items-center justify-center rounded-md text-sm font-semibold text-white hover:text-primary sm:px-5"
						>
							виж проекта
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
