// Redux Imports
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "../store/index";

// Next Imports
import type { AppProps } from "next/app";

// Project Imports
import "../styles/globals.scss";
import theme from "../templates/mui/Theme";
import Layout from "../components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</Provider>
	);
};

export default MyApp;
