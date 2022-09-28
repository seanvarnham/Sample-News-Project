import { MouseEvent, useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import Button from "@mui/material/Button";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "store/cart/cart-slice";
import { CartItem, Product } from "templates/interfaces";
import Snackbar from "@mui/material/Snackbar";

interface IAddToCartProps {
	product: Product;
}

const AddToCart = ({ product: item }: IAddToCartProps) => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => setOpen(false), 2000);
	});

	const onClickCartButton = (e: MouseEvent) => {
		e.preventDefault();
		console.log("added to cart");
		setOpen(true);

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
		<>
			<Snackbar open={open} message={`Added to cart`} />
			<Button
				variant="outlined"
				color="secondary"
				onClick={onClickCartButton}
			>
				<AddShoppingCart />
			</Button>
		</>
	);
};

export default AddToCart;
