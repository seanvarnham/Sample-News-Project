//
import { MouseEvent, useState } from "react";

//
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

//
import CartDisplay from "./CartDisplay";
import useCartState from "lib/hooks/useCartState";
import ClearCartButton from "./Buttons/ClearCart";

const CartButton = () => {
	const cartState = useCartState();

	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const onClickCartButton = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setAnchorEl(e.currentTarget);
	};
	const onCloseCartButton = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "cartPopover" : undefined;

	return (
		<>
			<Button
				aria-describedby={id}
				variant="outlined"
				color="secondary"
				onClick={onClickCartButton}
				startIcon={<ShoppingCart />}
			>
				{cartState?.totalQuantity && cartState.totalQuantity}
			</Button>

			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={onCloseCartButton}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Paper className="d-flex padding-x" style={{ width: "300px" }}>
					<div className="mob-12 p-t-sm p-b-sm">
						{cartState.totalQuantity ? (
							<>
								<div className="cell">
									<CartDisplay isCompact />
								</div>

								<div className="cell p-t-md d-flex align-justify">
									<ClearCartButton
										onClear={onCloseCartButton}
									/>

									<Link href="/cart" passHref>
										<Button
											color="secondary"
											variant="text"
											onClick={onCloseCartButton}
										>
											View Cart
										</Button>
									</Link>
								</div>
							</>
						) : (
							<>
								<Typography variant="body1">
									...well, this is awkward.
								</Typography>
							</>
						)}
					</div>
				</Paper>
			</Popover>
		</>
	);
};

export default CartButton;
