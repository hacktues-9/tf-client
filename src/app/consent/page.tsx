import Link from 'next/link';
import { TbMoodHappy, TbMoodKid, TbNotes } from 'react-icons/tb';

const UNDERAGE = 'https://docs.google.com/document/d/1zcpaXKqbGB9boCZVeRNZqwV-qTB5C5gE_P99Gy-OARM/edit?usp=share_link';
const ADULT = 'https://docs.google.com/document/d/1WMwwzXPt3jcSoHQWOCSK5rxoUUfaVmIMi__vCGVhjeM/edit?usp=share_link';
const FORM = 'https://forms.gle/hViERgkovuwetjU76';

const ConsentPage = () => (
	<div className="w-screen h-screen flex items-center justify-center">
		<div className="w-full max-w-screen-lg h-full  flex flex-col md:flex-row items-center justify-center p-8 py-28 gap-8">
			<Link
				href={FORM}
				className="h-full w-full max-h-96 aspect-square flex flex-col items-center justify-center gap-4 rounded-xl bg-bg-color border border-border"
			>
				<TbNotes size={128} />
				<h3 className="text-2xl font-black">форма за изпращане</h3>
			</Link>
			<div className="h-full relative w-full flex flex-col items-stretch gap-8">
				<Link
					href={UNDERAGE}
					className="h-full flex items-center justify-center gap-4 rounded-xl bg-bg-color border border-border"
				>
					<TbMoodKid size={64} />
					<h3 className="text-2xl font-black">непълнолетни</h3>
				</Link>
				<Link
					href={ADULT}
					className="h-full flex items-center justify-center gap-4 rounded-xl bg-bg-color border border-border"
				>
					<TbMoodHappy size={64} />
					<h3 className="text-2xl font-black">пълнолетни</h3>
				</Link>
			</div>
		</div>
	</div>
);

export default ConsentPage;
