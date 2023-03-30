import Image from 'next/image';
import Link from 'next/link';

import 'animate.css';
import { ABOUT_BUTTON, ABOUT_IMAGE, ABOUT_SUBTEXT, ABOUT_TEXT, ABOUT_TITLE } from '@/constants/home/about';

const About = () => (
	<section id="about" className="p-8 md:p-12">
		<div className="flex flex-col lg:flex-row gap-8 whitespace-pre-line items-center">
			{/* Text info */}
			<div className="w-full flex flex-col gap-4 text-justify">
				<h2 className="bg-gradient text-transparent font-black text-5xl bg-clip-text">{ABOUT_TITLE}</h2>
				<p className="">{ABOUT_TEXT}</p>
				<Link
					href={'https://tues.bg'}
					className="w-fit px-4 py-2 m-auto my-4 rounded-md text-xl bg-gradient font-bold uppercase hover:scale-105 transition-transform duration-300 shadow-2xl"
				>
					<span
						style={{
							textShadow: '3px 3px 13px rgba(0, 0, 0, 0.4)',
						}}
					>
						{ABOUT_BUTTON}
					</span>
				</Link>
				<i>{ABOUT_SUBTEXT}</i>
			</div>
			{/* Image */}
			<div className="w-full">
				<div className="animate__animated animate__backInRight bg-dark rounded-md overflow-hidden">
					<img
						src={ABOUT_IMAGE}
						alt=""
						className="w-full bg-dark rounded-md outline-none aspect-video shadow-2xl object-cover object-bottom"
					/>
				</div>
			</div>
		</div>
	</section>
);

export default About;
