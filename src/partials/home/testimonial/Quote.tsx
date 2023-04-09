import Image from 'next/image';

const Quote = ({ img, name, text, desc }: { img: string; name: string; text: string; desc: string }) => (
	<div className="w-full relative max-w-3xl p-6 flex flex-col sm:flex-row items-stretch justify-start gap-4 rounded-lg bg-bg-color border border-stroke">
		<div className="sm:w-32 shrink-0 flex flex-col items-center justify-center gap-4">
			<Image
				src={img}
				alt={name}
				width={128}
				height={128}
				priority
				className="!w-32 !h-32 rounded-lg !aspect-square"
			/>
			<h3 className="text-lg font-bold text-gray-800 font-inter tracking-wide leading-6">{name}</h3>
		</div>
		<div className="w-full sm:w-[1px] h-[1px] sm:h-auto shrink-0 bg-stroke" />
		<div className="flex flex-col justify-between gap-4">
			<p className="text-justify">{text}</p>
			<i className="opacity-50">{desc}</i>
		</div>
	</div>
);

export default Quote;
