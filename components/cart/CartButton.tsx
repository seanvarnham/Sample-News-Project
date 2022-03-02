import { MouseEvent, useState } from "react";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import { ReducerMap } from "../../templates/interfaces";
import { Paper, Popover } from "@material-ui/core";
import CartDisplay from "./CartDisplay";
import Link from "next/link";

type Props = {};

const CartButton = (props: Props) => {
	const cart = useSelector((state: ReducerMap) => state.cart);
	let cartState = cart;
	let localCart;

	if (typeof window !== "undefined") {
		localCart = localStorage.getItem("cart");

		if (localCart) {
			cartState = JSON.parse(localCart);
		}
	}

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
					<div className="d-flex margin-x p-t-sm p-b-sm">
						<div className="cell">
							<CartDisplay isCompact />
						</div>

						<div className="cell p-t-md d-flex align-right">
							<Link href="/cart" passHref>
								<Button
									color="secondary"
									variant="outlined"
									onClick={onCloseCartButton}
								>
									View Cart
								</Button>
							</Link>
						</div>
					</div>
				</Paper>
			</Popover>
		</>
	);
};

export default CartButton;
