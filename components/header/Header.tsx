import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
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
					<div className="mob-12 tab-9">
						<Logo />
					</div>
					<div className="mob-12 tab-3 d-flex align-right">
						<Button color="secondary">Cart</Button>
					</div>
				</div>
			</AppBar>

			{/* <header>
				<Paper elevation={0}>
					<div className="d-flex">
						<div className="mob-12 tab-6">
							<Logo />
						</div>
						<div className="mob-12 tab-6">b</div>
					</div>
				</Paper>
			</header> */}
		</>
	);
};

export default Header;
