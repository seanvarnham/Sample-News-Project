// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	// setupFiles: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	coveragePathIgnorePatterns: [
		"<rootDir>/.next/",
		"<rootDir>/node_modules/",
		"<rootDir>/coverage/",
		"<rootDir>/i18n/",
		"<rootDir>/public/",
		".config.js",
		"<rootDir>/lib/polyfills.js",
		"<rootDir>/jscpd/",
		"<rootDir>/components/Checkout/scripts/",
		"<rootDir>/.storybook/",
		"<rootDir>/.scannerwork/",
		"<rootDir>/server/stub/",
		"<rootDir>/server/local/",
		"<rootDir>/server/api/",
		".prettierrc.js",
		"<rootDir>/jest-stare/",
	],
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
