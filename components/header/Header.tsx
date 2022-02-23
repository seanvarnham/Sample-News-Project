// Components
import AppBar from "@material-ui/core/AppBar";
import Link from "next/link";

// Redux
import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

//
import Logo from "../../lib/icons/Logo";
import CartButton from "../cart/CartButton";

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
				<div className="container d-flex">
					<div className="mob-12 tab-3">
						<Link href="http://localhost:3000">
							<>
								A<Logo />
							</>
						</Link>
					</div>
					<div className="mob-12 tab-6"></div>
					<div className="mob-12 tab-3 d-flex align-right">
						{cart && <CartButton cartState={cart} />}
					</div>
				</div>
			</AppBar>
		</>
	);
};

export default Header;
