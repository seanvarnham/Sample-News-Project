import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import theme from "../templates/mui/Theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />;
		</ThemeProvider>
	);
};

export default MyApp;
