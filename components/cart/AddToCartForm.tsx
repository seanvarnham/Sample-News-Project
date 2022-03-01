import { Button, Input } from "@material-ui/core";
import { FormEvent, forwardRef } from "react";
import { Product } from "../../templates/interfaces";

type Props = {
	onAddToCart: (e: FormEvent<HTMLElement>) => void;
	item: Product;
};

const AddToCartForm = forwardRef<HTMLInputElement>((props: Props, ref) => {
	const { onAddToCart, item } = props;
	// console.log("ref", ref);

	return (
		<form onSubmit={onAddToCart} className="d-flex margin-x">
			<div className="cell mob-3">
				<Input
					inputRef={ref}
					id={item.name}
					type="number"
					placeholder="0"
				/>
			</div>
			<div className="cell auto d-flex align-right">
				<Button type="submit" color="secondary" variant="outlined">
					Add to cart
				</Button>
			</div>
		</form>
	);
});

export default AddToCartForm;
