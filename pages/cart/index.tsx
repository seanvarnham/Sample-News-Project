// Externals & Interfaces
import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

// MUI
import { Button, Typography } from "@material-ui/core";

// Internals
import PageHead from "../../components/header/PageHead";
import CartDisplay from "../../components/cart/CartDisplay";
import useCartState from "lib/hooks/useCartState";
import { ClearCartButton } from "@components/cart/CartButton";

type Props = {};

const Cart = (props: Props) => {
	const cartState = useCartState();

	let content;

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

						{cartState.totalQuantity > 0 && (
							<div className="d-flex align-right margin-x p-t-sm">
								<div className="cell shrink">
									<ClearCartButton
										onClear={() => {
											return null;
										}}
									/>
								</div>
								<div className="cell shrink">
									<Button
										variant="contained"
										color="secondary"
										onClick={() =>
											window.alert(
												"Sorry, no can do... yet."
											)
										}
									>
										Proceed to checkout
									</Button>
								</div>
							</div>
						)}
					</section>

					{/* <section>{cartState.totalQuantity > 0 && <></>}</section> */}
				</article>
			</main>
		</>
	);
};

export default Cart;
