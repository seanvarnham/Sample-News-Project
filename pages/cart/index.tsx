// Externals & Interfaces
import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

// MUI
import { Typography } from "@material-ui/core";

// Internals
import PageHead from "../../components/header/PageHead";
import CartDisplay from "../../components/cart/CartDisplay";
import FormattedPrice from "../../lib/helpers/getFormattedPrice";

type Props = {};

const Cart = (props: Props) => {
	const cart = useSelector((state: ReducerMap) => state.cart);
	let cartState = cart;
	let localCart;

	if (typeof window !== "undefined") {
		localCart = localStorage.getItem("cart");

		if (localCart) {
			cartState = JSON.parse(localCart);
		}
	}

	let content;

	console.log("cartState", cartState);
	if (cartState.totalQuantity === 0) {
		content = (
			<Typography paragraph>Your cart is currently empty</Typography>
		);
	}

	if (cartState.totalQuantity > 0) {
		content = (
			<>
				<CartDisplay />
			</>
		);
	}

	return (
		<>
			<PageHead title={"Cart | Party Store"} />

			<main>
				<article className="container p-t-lg p-b-lg">
					<section className="p-b-lg">
						<Typography
							gutterBottom
							variant="h4"
							variantMapping={{ h4: "h1" }}
						>
							Your cart
						</Typography>
						{content}
					</section>

					<section>{cartState.totalQuantity > 0 && <></>}</section>
				</article>
			</main>
		</>
	);
};

export default Cart;
