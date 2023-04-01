'use client';

import { useEffect, useState } from 'react';

import Controls from './testimonial/Controls';
import Quote from './testimonial/Quote';

import { TESTIMONIALS, TESTIMONIALS_TITLE } from '@/constants/home/testimonials';

const Testimonial = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState<number | null>(null);

	const handlePrev = () => {
		if (currentTestimonial === null) return;

		setCurrentTestimonial(Math.abs(currentTestimonial - 1) % TESTIMONIALS.length);
	};

	const handleNext = () => {
		if (currentTestimonial === null) return;

		setCurrentTestimonial((currentTestimonial + 1) % TESTIMONIALS.length);
	};

	useEffect(() => {
		if (currentTestimonial === null)
			setCurrentTestimonial(Math.floor(Math.random() * TESTIMONIALS.length) % TESTIMONIALS.length);
	}, []);

	if (currentTestimonial === null) return null;

	return (
		<section className="min-h-[36rem] w-full relative p-8 md:p-12">
			<div className="min-h-full h-full flex flex-col justify-between gap-8">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-8">
					<h2 className="bg-gradient text-transparent font-black text-5xl bg-clip-text">
						{TESTIMONIALS_TITLE}
					</h2>
					<Controls handlePrev={handlePrev} handleNext={handleNext} />
				</div>
				<div className="w-full relative flex items-center justify-center">
					<Quote
						img={TESTIMONIALS[currentTestimonial].img}
						name={TESTIMONIALS[currentTestimonial].testimonyName}
						text={TESTIMONIALS[currentTestimonial].testimonyBody}
						desc={TESTIMONIALS[currentTestimonial].testimonyDesc}
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
