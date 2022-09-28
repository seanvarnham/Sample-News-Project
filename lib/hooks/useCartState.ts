import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

const useCartState = () => {
	const cart = useSelector((state: ReducerMap) => state.cart);

	if (!cart) {
		throw new Error("useCartState couldn't find a cart state.");
	}

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

export default useCartState;
