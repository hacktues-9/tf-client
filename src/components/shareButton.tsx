'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { TbShare } from 'react-icons/tb';

const ShareButton = (): JSX.Element => {
	const path = usePathname();

	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(`${window.location.origin}${path}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="absolute top-0 right-0 p-4 z-[1001]">
			<button
				className="flex items-center gap-2 px-4 py-2 bg-bg-color rounded-xl border-2 border-border hover:bg-bg-color-hover"
				onClick={handleCopy}
			>
				<TbShare className="h-6 w-6" />
				<span className="text-sm">{copied ? 'Копирано!' : 'Сподели'}</span>
			</button>
		</div>
	);
};

export default ShareButton;
