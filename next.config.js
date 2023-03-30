/** @type {import('next').NextConfig} */
const path = require('node:path');
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	experimental: {
		appDir: true,
	},
	async redirects() {
		return [{
			source: '/schedule',
			destination: '/#schedule',
			permanent: true,
		}, ]
	},
};

module.exports = nextConfig;