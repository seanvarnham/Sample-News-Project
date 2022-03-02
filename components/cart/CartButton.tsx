import { MouseEvent } from "react";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import { ReducerMap } from "../../templates/interfaces";

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

	const onClickCartButton = (e: MouseEvent) => {
		e.preventDefault();
	};

	return (
		<Button
			variant="outlined"
			color="secondary"
			onClick={onClickCartButton}
		>
			<ShoppingCart />

			{cartState?.totalQuantity >= 1 && (
				<span>
					<span>{cartState.totalQuantity}</span>
				</span>
			)}
		</Button>
	);
};

export default CartButton;
