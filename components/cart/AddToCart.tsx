import { MouseEvent } from "react";
// import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "store/cart/cart-slice";
import { CartItem, Product } from "templates/interfaces";

type Props = {
	product: Product;
};

const AddToCart = (props: Props) => {
	const { product: item } = props;
	const dispatch = useDispatch();

	const onClickCartButton = (e: MouseEvent) => {
		e.preventDefault();

		const usePrice = item.onSale
			? item.price.salePrice
			: item.price.stdPrice;

		const prodData: CartItem = {
			id: item.id,
			name: item.name,
			value: usePrice,
			quantity: 1,
		};
		dispatch(addToCart(prodData));
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
