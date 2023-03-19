import Countdown from '@/components/countdown';

import { TITLE } from '@/constants/keywords';

import 'animate.css';

export default function Home() {
	return (
		<main className="">
			<div className="p-4 w-full h-screen flex flex-col lg:flex-row items-center justify-center">
				<h1 className="animate__animated animate__fadeInTopLeft !leading-tight !tracking-wide text-7xl sm:text-6xl md:text-8xl text-center font-zone99 font-normal drop-shadow-lg">
					TUES{' '}
					<span className="!leading-tight !tracking-wide text-7xl sm:text-6xl md:text-8xl text-center font-zone99 font-normal text-primary drop-shadow-lg">
						Fest
					</span>
					<br />
					<span className="!leading-tight !tracking-wide text-6xl sm:text-5xl md:text-7xl text-center font-zone99 font-normal drop-shadow-lg">
						2023
					</span>
				</h1>
				<Countdown />
			</div>
		</main>
	);
}
