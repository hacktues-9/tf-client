'use client';

import { useVoteContext } from '@/context/vote';

const VoteButton = ({
	id,
	name,
	thumbnail,
	category,
}: {
	id: number;
	name: string;
	thumbnail: string;
	category: string;
}) => {
	const { addVote } = useVoteContext();

	const handleVote = () => {
		addVote(category, id, name, thumbnail);
	};

	return (
		<button
			onClick={handleVote}
			className="flex items-center justify-center rounded-md bg-primary py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-opacity-90 sm:px-5"
		>
			Гласувай
		</button>
	);
};

export default VoteButton;
