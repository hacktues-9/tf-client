import Script from 'next/script';

import { Analytics } from '@vercel/analytics/react';

import Footer from '@/partials/layout/Footer';
import Navigation from '@/partials/layout/Navigation';

import 'animate.css';
import './globals.css';
import VoteProvider from '@/context/vote';
import VotingLayout from '@/partials/layout/Voting';

export const metadata = {
	title: {
		default: 'TUES Fest 2024',
		template: '%s | TUES Fest 2024',
	},
	description:
		'TUES Fest 2024 - ден на отворените врати на ТУЕС и изложение на ученически проекти. София Тех Парк - 20 април 2024.',
	keywords: [
		'tues',
		'tues fest',
		'tues fest 2023',
		'tuesfest',
		'tuesfest 2023',
		'tuesfest.bg',
		'tuesfest.bg 2023',
		'tuesfest 2023',
		'туес',
		'технологично училище електронни системи',
		'програмиране',
		'бал',
		'училища след 7ми клас',
		'кандидатстване',
		'бал',
		'минимален бал',
		'бал 2023',
		'бал 2023 туес',
		'туес бал 2023',
		'туес бал',
		'туес бал 2023',
		'ту софия',
		'високоплатени работи',
		'проекти',
		'ученици',
		'джон атанасов',
		'туес фест',
		'туес фест 2023',
		'туес фест 2023 програма',
		'туес фест 2023 програма',
		'най-добрите ученици',
		'училища софия',
		'най-добри гимназии',
		'топ училища',
		'топ гимназии',
		'ден на отворените врати',
		'ден на отворените врати 2023',
		'ден на отворените врати 2023 туес',
		'туес ден на отворените врати',
		'туес ден на отворените врати 2023',
		'отворени врати',
		'отворени врати 2023',
		'отворени врати 2023 туес',
		'нво',
		'нво 2023',
		'нво 2023 туес',
		'матури',
		'матури 2023',
		'матури 7ми клас',
		'матури 7 клас',
		'кандидатстване 7 клас',
	],
	viewport: 'width=device-width, initial-scale=1',
	themeColor: '#141420',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.png',
		apple: '/favicon.png',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TUES Fest 2024',
		description:
			'TUES Fest 2024 - ден на отворените врати на ТУЕС и изложение на ученически проекти. София Тех Парк - 20 април 2024.',
		creator: '@tuesfest',
		images: ['https://tuesfest.bg/logo/motto.png'],
	},
	archives: ['https://2022.tuesfest.bg'],
	assets: ['https://tuesfest.bg/favicon.png', 'https://tuesfest.bg/logo/motto.png', 'https://tuesfest.bg/assets'],
	openGraph: {
		title: 'TUES Fest 2024',
		description:
			'TUES Fest 2024 - ден на отворените врати на ТУЕС и изложение на ученически проекти. София Тех Парк - 20 април 2024.',
		url: 'https://tuesfest.bg',
		siteName: 'TUES Fest 2024',
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
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-1H1H1CR559" strategy="afterInteractive" />
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-1H1H1CR559');
					`}
				</Script>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any"></link>
			</head>
			<body className="bg-black">
				<Navigation />
				{/* <VoteProvider> */}
					{children}
					{/* <VotingLayout /> */}
				{/* </VoteProvider> */}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
