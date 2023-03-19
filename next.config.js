/** @type {import('next').NextConfig} */
const path = require('node:path');
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
