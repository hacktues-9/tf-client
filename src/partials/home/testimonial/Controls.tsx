import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const Controls = ({ handlePrev, handleNext }: { handlePrev: () => void; handleNext: () => void }) => (
	<div className="flex gap-2 items-center justify-center">
		<button
			onClick={handlePrev}
			className="p-2 text-2xl rounded-lg bg-bg-color border border-stroke hover:opacity-90"
		>
			<TbChevronLeft />
		</button>
		<button
			onClick={handleNext}
			className="p-2 text-2xl rounded-lg bg-bg-color border border-stroke hover:opacity-90"
		>
			<TbChevronRight />
		</button>
	</div>
);

export default Controls;
