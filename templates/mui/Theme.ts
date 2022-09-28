import { createTheme } from "@mui/material";

const theme = createTheme({
	breakpoints: {
		keys: ["xs", "sm", "md", "lg", "xl"],
		values: {
			xs: 0,
			sm: 0,
			md: 640,
			lg: 1024,
			xl: 1920,
		},
	},
	palette: {
		primary: {
			main: "#0a318c",
		},
		secondary: {
			main: "#ba8e27",
		},
		error: {
			main: "#a51212",
		},
		warning: {
			main: "#fc9090",
		},
		info: {
			main: "#90cbfc",
		},
	},

	typography: {
		h1: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em",
		},
		h2: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 300,
			fontSize: "3.75rem",
			lineHeight: 1.2,
			letterSpacing: "-0.00833em",
		},
		h3: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "3rem",
			lineHeight: 1.167,
			letterSpacing: "0em",
		},
		h4: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "2.125rem",
			lineHeight: 1.235,
			letterSpacing: "0.00735em",
		},
		h5: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "1.5rem",
			lineHeight: 1.334,
			letterSpacing: "0em",
		},
		h6: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 500,
			fontSize: "1.25rem",
			lineHeight: 1.6,
			letterSpacing: "0.0075em",
		},
		subtitle1: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.75,
			letterSpacing: "0.00938em",
		},
		subtitle2: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.57,
			letterSpacing: "0.00714em",
		},
		body1: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
			letterSpacing: "0.00938em",
		},
		body2: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "0.875rem",
			lineHeight: 1.43,
			letterSpacing: "0.01071em",
		},
		button: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.75,
			letterSpacing: "0.02857em",
		},
		caption: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "0.75rem",
			lineHeight: 1.66,
			letterSpacing: "0.03333em",
		},
	},
});

export const darkTheme = createTheme({
	breakpoints: {
		keys: ["xs", "sm", "md", "lg", "xl"],
		values: {
			xs: 0,
			sm: 0,
			md: 640,
			lg: 1024,
			xl: 1920,
		},
	},
	palette: {
		primary: {
			main: "#0a318c",
		},
		secondary: {
			main: "#ba8e27",
		},
		error: {
			main: "#a51212",
		},
		warning: {
			main: "#fc9090",
		},
		info: {
			main: "#90cbfc",
		},
	},

	typography: {
		h1: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.167,
			letterSpacing: "-0.01562em",
		},
		h2: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 300,
			fontSize: "3.75rem",
			lineHeight: 1.2,
			letterSpacing: "-0.00833em",
		},
		h3: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "3rem",
			lineHeight: 1.167,
			letterSpacing: "0em",
		},
		h4: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "2.125rem",
			lineHeight: 1.235,
			letterSpacing: "0.00735em",
		},
		h5: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "1.5rem",
			lineHeight: 1.334,
			letterSpacing: "0em",
		},
		h6: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 500,
			fontSize: "1.25rem",
			lineHeight: 1.6,
			letterSpacing: "0.0075em",
		},
		subtitle1: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.75,
			letterSpacing: "0.00938em",
		},
		subtitle2: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.57,
			letterSpacing: "0.00714em",
		},
		body1: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
			letterSpacing: "0.00938em",
		},
		body2: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "0.875rem",
			lineHeight: 1.43,
			letterSpacing: "0.01071em",
		},
		button: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.75,
			letterSpacing: "0.02857em",
		},
		caption: {
			fontFamily: '"Open Sans", sans-serif',
			fontWeight: 400,
			fontSize: "0.75rem",
			lineHeight: 1.66,
			letterSpacing: "0.03333em",
		},
	},
});

export default theme;
