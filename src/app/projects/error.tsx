'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center">
			<h2 className="bg-gradient text-transparent bg-clip-text text-5xl font-black">
				Нещо се обърка, пробвай пак
			</h2>
			<button
				className="mt-8 bg-primary text-white px-5 py-2 rounded-md hover:scale-105 transition-all"
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Опитай пак
			</button>
		</div>
	);
}
