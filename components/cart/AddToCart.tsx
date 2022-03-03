import { MouseEvent } from "react";
// import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

// import { ReducerMap } from "../../templates/interfaces";

// import classes from "../header/header.module.scss";

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
			Add
		</Button>
	);
};

export default AddToCart;
