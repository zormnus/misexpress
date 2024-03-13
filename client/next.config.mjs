/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './app/imageLoader.ts',
	},
}

export default nextConfig
