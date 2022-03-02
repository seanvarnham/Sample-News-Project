import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

const getCartState = () => {
	const cart = useSelector((state: ReducerMap) => state.cart);
	let cartState = cart;
	let localCart;

	if (typeof window !== "undefined") {
		localCart = localStorage.getItem("cart");

		if (localCart) {
			cartState = JSON.parse(localCart);
		}
	}

	return cartState;
};

export default getCartState;
