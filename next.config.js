/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: [
			"images.pexels.com",
			"ridleys.sirv.com",
			"upload.wikimedia.org",
			"www.elliottsfancydress.co.uk",
			"media.glamour.com",
		],
		deviceSizes: [480, 640, 768, 1024, 1080, 1200, 1920, 2048],
		formats: ["image/avif", "image/webp"],
	},
	env: {
		LOCAL_URL: "https://typescript-cart-app.herokuapp.com",
	},
};

module.exports = nextConfig;
