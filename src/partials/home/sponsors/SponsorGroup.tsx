import Sponsor from './Sponsor';

import { TYPE } from '@/constants/home/sponsors';

const SponsorGroup = ({
	type,
	sponsors,
}: {
	type: string;
	sponsors: {
		name: string;
		url: string;
		logo: string;
	}[];
}) => (
	<div key={type} className="p-8 flex flex-col items-center gap-8 bg-bg-color border border-stroke rounded-xl">
		<h3 className="text-white font-black text-3xl">{TYPE[type as any]}</h3>
		<div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-8">
			{sponsors.map((sponsor) => (
				<Sponsor key={sponsor.name} {...sponsor} />
			))}
		</div>
	</div>
);

export default SponsorGroup;
