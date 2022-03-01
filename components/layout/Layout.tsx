import Footer from "../footer/Footer";
import Header from "../header/Header";

import classes from "./Layout.module.scss";

type Props = {
	children?: any;
};

const Layout = (props: Props) => {
	return (
		<>
			<div className={classes.wrapper}>
				<Header />

				{props.children}

				<Footer />
			</div>
		</>
	);
};

export default Layout;
