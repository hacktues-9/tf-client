import Countdown from '@/components/countdown';

import About from '@/partials/home/About';
import Expectations from '@/partials/home/Expectations';
import Schedule from '@/partials/home/Schedule';
import Sponsors from '@/partials/home/Sponsors';
import Testimonial from '@/partials/home/Testimonial';

import 'animate.css';

export default function Home() {
	return (
		<main className="max-w-screen-2xl m-auto">
			<section
				id="front-section"
				className="p-4 py-32 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-16"
			>
				<h1 className="animate__animated animate__fadeInTopLeft !leading-none !tracking-wide text-8xl sm:text-8xl md:text-9xl text-center font-origin font-normal drop-shadow-lg">
					TUES{' '}
					<span className="!leading-none !tracking-wide text-8xl sm:text-8xl md:text-9xl text-center font-origin font-normal bg-gradient text-transparent bg-clip-text drop-shadow-lg">
						Fest
					</span>
					<br className="text-3xl leading-none" />
					<span className="!leading-none !tracking-wide text-7xl sm:text-7xl md:text-8xl text-center font-origin font-normal drop-shadow-lg">
						2023
					</span>
				</h1>
				<Countdown />
			</section>
			<About />
			<Expectations />
			<Schedule />
			<Sponsors />
			<Testimonial />
		</main>
	);
}
