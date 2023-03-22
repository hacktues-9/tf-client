import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import 'animate.css';
import Footer from '@/partials/layout/Footer';

export const metadata = {
	title: 'TUES Fest 2023',
	description:
		'TUES Fest 2023 - ден на отворените врати на ТУЕС и изложение на ученически проекти. София Тех Парк - 23 април 2023.',
	viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="bg">
			<body className="bg-black">
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
