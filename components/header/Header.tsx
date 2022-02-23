//
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

//
import ShoppingCart from "@material-ui/icons/ShoppingCart";

//
import Logo from "../../lib/icons/Logo";

type Props = {};

const Header = (props: Props) => {
	return (
		<>
			<AppBar
				color="transparent"
				position="relative"
				className={`p-t-sm p-b-sm`}
			>
				<div className="container d-flex">
					<div className="mob-12 tab-3">
						<Logo />
					</div>
					<div className="mob-12 tab-6"></div>
					<div className="mob-12 tab-3 d-flex align-right">
						<Button variant="outlined" color="primary">
							<ShoppingCart />
						</Button>
					</div>
				</div>
			</AppBar>
		</>
	);
};

export default Header;
