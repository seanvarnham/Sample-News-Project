import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { cartState, ReducerMap } from "../../templates/interfaces";

import classes from "../header/header.module.scss";

type Props = {
	cartState: cartState;
};

const CartButton = (props: Props) => {
	const cart = useSelector((state: ReducerMap) => state.cart);
	// console.log("cart", cart);

	return (
		<Button variant="outlined" color="primary">
			<ShoppingCart />

			<span className={classes[`cart-container`]}>
				{cart.totalQuantity && cart.totalQuantity >= 1 && (
					<span>{cart.totalQuantity}</span>
				)}
			</span>
		</Button>
	);
};

export default CartButton;
