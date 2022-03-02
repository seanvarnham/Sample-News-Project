// Externals & Interfaces
import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

// MUI
import { Typography } from "@material-ui/core";

// Internals
import PageHead from "../../components/header/PageHead";
import CartDisplay from "../../components/cart/CartDisplay";
import FormattedPrice from "../../lib/helpers/getFormattedPrice";
import getCartState from "../../lib/helpers/getCartState";

type Props = {};

const Cart = (props: Props) => {
	// const cartState = getCartState();
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

	if (cartState.totalQuantity === 0) {
		content = (
			<Typography paragraph>Your cart is currently empty</Typography>
		);
	}

	if (cartState.totalQuantity > 0) {
		content = (
			<>
				<div className="margin-x cart-table">
					<div className="cell d-flex cart-table__header">
						<div className="cell mob-8">
							<strong>Item</strong>
						</div>
						<div className="cell mob-2 text-align-center">
							<strong>Qty</strong>
						</div>
						<div className="cell mob-2 text-align-right">
							<strong>Value</strong>
						</div>
					</div>

					{cartState.items.map((item) => {
						return (
							<div className="cell d-flex" key={item.id}>
								<div className="mob-8">{item.name}</div>
								<div className="mob-2 text-align-center">
									{item.quantity}
								</div>
								<div className="mob-2 text-align-right">
									<FormattedPrice value={item.value} />
								</div>
							</div>
						);
					})}

					<div className="cell d-flex cart-table__footer p-t-lg">
						<div className="cell mob-8"></div>
						<div className="cell mob-2 text-align-center">
							{cartState.totalQuantity}
						</div>
						<div className="cell mob-2 text-align-right">
							<FormattedPrice value={cartState.totalValue} />
						</div>
					</div>
				</div>
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
					</section>

					<section>
						{cartState.totalQuantity > 0 && (
							<>
								<CartDisplay />
							</>
						)}
					</section>
				</article>
			</main>
		</>
	);
};

export default Cart;
