//
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";

//
import { clearCart, initialState } from "../../../../store/cart/cart-slice";

interface IClearCartButtonProps {
	onClear?: () => void;
}

const ClearCartButton = ({ onClear }: IClearCartButtonProps) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const onClearCart = () => {
		onClear ? onClear() : null;
		router.reload();

		dispatch(clearCart(null));

		if (typeof window !== "undefined") {
			localStorage.setItem("cart", JSON.stringify(initialState));
		}
	};

	return (
		<Button color="secondary" variant="text" onClick={onClearCart}>
			Empty Cart
		</Button>
	);
};
export default ClearCartButton;
