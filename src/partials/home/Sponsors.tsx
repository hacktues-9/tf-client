import { SPONSORS } from '@/constants/home/sponsors';
import SponsorGroup from './sponsors/SponsorGroup';

const Sponsors = () => (
	<section id="sponsors" className="p-8 md:p-12">
		<div className="py-4 pb-8">
			<h2 className="bg-gradient text-transparent font-black text-5xl bg-clip-text">Спонсори</h2>
		</div>
		<div className="flex flex-col gap-8">
			{SPONSORS.map(
				(sponsor) =>
					sponsor.sponsors.length > 0 && (
						<SponsorGroup key={sponsor.type} type={sponsor.type} sponsors={sponsor.sponsors} />
					)
			)}
		</div>
	</section>
);

export default Sponsors;
