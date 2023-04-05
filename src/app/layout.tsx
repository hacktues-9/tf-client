import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';

import Footer from '@/partials/layout/Footer';
import Navigation from '@/partials/layout/Navigation';

import './globals.css';
import 'animate.css';

export const metadata = {
	title: {
		default: 'TUES Fest 2023',
		template: '%s | TUES Fest 2023',
	},
	description:
		'TUES Fest 2023 - ден на отворените врати на ТУЕС и изложение на ученически проекти. София Тех Парк - 23 април 2023.',
	viewport: 'width=device-width, initial-scale=1',
	themeColor: '#141420',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.png',
		apple: '/favicon.png',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TUES Fest 2023',
		description:
			'TUES Fest 2023 - ден на отворените врати на ТУЕС и изложение на ученически проекти. София Тех Парк - 23 април 2023.',
		creator: '@tuesfest',
		images: ['https://tuesfest.bg/logo/motto.png'],
	},
	archives: ['https://2022.tuesfest.bg'],
	assets: ['https://tuesfest.bg/favicon.png', 'https://tuesfest.bg/logo/motto.png', 'https://tuesfest.bg/assets'],
	openGraph: {
		title: 'TUES Fest 2023',
		description:
			'TUES Fest 2023 - ден на отворените врати на ТУЕС и изложение на ученически проекти. София Тех Парк - 23 април 2023.',
		url: 'https://tuesfest.bg',
		siteName: 'TUES Fest 2023',
		images: [
			{
				url: 'https://tuesfest.bg/logo/motto.png',
			},
		],
		locale: 'bg-BG',
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="bg">
			<head>
				<script src="https://www.googletagmanager.com/gtag/js?id=G-1H1H1CR559" strategy="afterInteractive" />
				<script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-1H1H1CR559');
					`}
				</script>
			</head>
			<body className="bg-black">
				<Navigation />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
