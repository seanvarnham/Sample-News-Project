// Externals
import { Paper } from "@mui/material";

// import Link from "next/link";

// Internals
import classes from "./Footer.module.scss";

const Footer = () => {
	return (
		<Paper
			elevation={2}
			component="footer"
			className={`d-flex align-center ${classes.footer}`}
		>
			<div className={`container`}>
				<span>Powered by BoJo</span>
			</div>
		</Paper>
	);
};

export default Footer;
