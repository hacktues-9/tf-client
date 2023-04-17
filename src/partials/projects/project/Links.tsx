import Link from 'next/link';

import { TbBrandGithub, TbGlobe } from 'react-icons/tb';

import { Links } from '@/app/projects/[projectId]/page';
import { ReactNode } from 'react';

const Linky = ({ text, url, icon }: { text: string; url: string; icon: ReactNode }) => (
	<Link
		href={url}
		target="_blank"
		rel="noreferrer"
		className="w-full flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
	>
		{icon}
		<span className="text-md font-semibold">{text}</span>
	</Link>
);

const LinksContainer = ({ links }: { links: Links }) => (
	<div className="w-full max-w-screen-lg">
		<div className="bg-bg-color rounded-xl border-2 border-border">
			<div className="px-8 py-4 flex flex-col gap-4">
				<div className="flex gap-4">
					<Linky text="GitHub" url={links.github} icon={<TbBrandGithub size={28} />} />
					{links.demo && <Linky text="Уебсайт" url={links.demo} icon={<TbGlobe size={28} />} />}
				</div>
			</div>
		</div>
	</div>
);

export default LinksContainer;