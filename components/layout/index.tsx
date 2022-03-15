import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";

import classes from "./Layout.module.scss";

interface ILayoutProps {
	children?: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<div className={classes.wrapper}>
				<Header />

				{children}

				<Footer />
			</div>
		</>
	);
};

export default Layout;
