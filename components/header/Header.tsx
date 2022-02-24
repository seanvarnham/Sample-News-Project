// Components
import AppBar from "@material-ui/core/AppBar";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

//
// import Logo from "../../lib/icons/Logo";
import CartButton from "../cart/CartButton";
import Navigation from "./Navigation";

type Props = {};

const Header = (props: Props) => {
	const cart = useSelector((state: ReducerMap) => state.cart);

	return (
		<>
			<AppBar
				color="transparent"
				position="relative"
				className={`p-t-sm p-b-sm`}
			>
				<div className="container d-flex padding-x">
					<div className="cell mob-12 tab-3">
						<Link href="/">
							<span
								style={{
									fontFamily: "Time New Roman, Serif",
									fontSize: "2rem",
									fontWeight: "bold",
								}}
							>
								No. 10 Party Shop
							</span>
							{/* <Logo /> */}
						</Link>
					</div>
					<div className="cell mob-12 tab-auto">
						<Navigation label="Main navigation" />
					</div>
					<div className="cell mob-12 tab-shrink d-flex align-right">
						{cart && <CartButton cartState={cart} />}
					</div>
				</div>
			</AppBar>
		</>
	);
};

export default Header;
