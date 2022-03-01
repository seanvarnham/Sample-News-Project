import { MouseEvent } from "react";
// import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

// import { ReducerMap } from "../../templates/interfaces";

// import classes from "../Header/header.module.scss";

type Props = {};

const AddToCart = (props: Props) => {
	// const cart = useSelector((state: ReducerMap) => state.cart);

	const onClickCartButton = (e: MouseEvent) => {
		e.preventDefault();
	};

	return (
		<Button
			variant="outlined"
			color="secondary"
			onClick={onClickCartButton}
		>
			<AddShoppingCart />
			Add to cart
			{/* <span className={classes[`cart-container`]}>
				{cart.totalQuantity && cart.totalQuantity >= 1 && (
					<span>{cart.totalQuantity}</span>
				)}
			</span> */}
		</Button>
	);
};

export default AddToCart;
