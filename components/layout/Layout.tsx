import Footer from "../footer/Footer";
import Header from "../header/Header";

type Props = {
	children?: any;
};

const Layout = (props: Props) => {
	return (
		<>
			<div className={`wrapper`}>
				<Header />

				{props.children}

				<Footer />
			</div>
		</>
	);
};

export default Layout;
