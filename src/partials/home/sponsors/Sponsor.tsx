import Link from 'next/link';

const Sponsor = ({ name, url, logo }: { name: string; url: string; logo: string }) => (
	<Link href={url} passHref target="_blank">
		<img
			src={logo}
			alt={name}
			loading='lazy'
			className="w-full sm:w-48 h-32 px-16 sm:px-4 py-8 object-contain !aspect-ratio-[12/8] bg-white rounded-xl hover:scale-105 transition-transform"
		/>
	</Link>
);

export default Sponsor;
