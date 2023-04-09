import { TbClockHour4, TbMapPin } from 'react-icons/tb';

import About from '@/partials/home/About';
import Expectations from '@/partials/home/Expectations';
import Schedule from '@/partials/home/Schedule';
import Sponsors from '@/partials/home/Sponsors';
import Testimonial from '@/partials/home/Testimonial';

import Countdown from '@/components/countdown';

import 'animate.css';

export default function Home() {
	return (
		<main className="max-w-screen-2xl m-auto">
			<section
				id="front-section"
				className="p-4 py-32 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-16"
			>
				<div /* className="animate__animated animate__fadeInTopLeft" */>
					<h1 className="!leading-none !tracking-wide text-8xl sm:text-8xl md:text-9xl text-center font-origin font-normal drop-shadow-lg">
						TUES{' '}
						<span className="!leading-none !tracking-wide text-8xl sm:text-8xl md:text-9xl text-center font-origin font-normal bg-gradient text-transparent bg-clip-text drop-shadow-lg">
							FEST
						</span>
						<br className="text-3xl leading-none" />
						<span className="!leading-none !tracking-wide text-7xl sm:text-7xl md:text-8xl text-center font-origin font-normal drop-shadow-lg">
							2023
						</span>
					</h1>
				</div>
				<div>
					<Countdown />
					<div className="flex flex-col sm:flex-row items-stretch gap-4 text-center">
						<div className="w-full px-4 py-2 flex items-center justify-center gap-2 text-lg rounded-lg bg-bg-color border border-border">
							<TbMapPin size={24} />
							<p>{'София Тех Парк'}</p>
						</div>
						<div className="w-full px-4 py-2 flex items-center justify-center gap-2 text-lg rounded-lg bg-bg-color border border-border">
							<TbClockHour4 size={24} />
							<p>23 април от 10:30</p>
						</div>
					</div>
				</div>
			</section>
			<About />
			<Expectations />
			<Schedule />
			<Sponsors />
			<Testimonial />
		</main>
	);
}
