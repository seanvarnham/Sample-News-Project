import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import PageHead from "../../components/header/PageHead";
import { ReducerMap } from "../../templates/interfaces";
// import classes from "./cart.module.scss";

type Props = {};

const Cart = (props: Props) => {
	const cart = useSelector((state: ReducerMap) => state.cart);
	let content;

	if (cart.items.length === 0) {
		content = (
			<>
				<Typography paragraph>Your cart is currently empty</Typography>
			</>
		);
	}

	return (
		<>
			<PageHead title={"Cart | Party Store"} />

			<main>
				<article className="container p-t-lg p-b-lg">
					<section>
						<Typography
							gutterBottom
							variant="h4"
							variantMapping={{ h4: "h1" }}
						>
							Your cart
						</Typography>

						{content}
					</section>
				</article>
			</main>
		</>
	);
};

export default Cart;
