import { FormEvent, forwardRef, Ref } from "react";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import { Product } from "../../templates/interfaces";

interface IAddFormProps {
	onAddToCart: (e: FormEvent<HTMLElement>) => void;
	item: Product;
}

const AddForm = forwardRef(
	({ onAddToCart, item }: IAddFormProps, ref: Ref<HTMLInputElement>) => {
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
						<AddShoppingCart />
					</Button>
				</div>
			</form>
		);
	}
);

AddForm.displayName = "AddForm";
const AddToCartForm = AddForm;
export default AddToCartForm;
