// Externals
import {
	FormEvent,
	// useRef,
	// useState,
	// forwardRef,
	createRef,
} from "react";
import { useDispatch } from "react-redux";
// import Button from "@material-ui/core/Button";
// import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

// Internals
import classes from "./ProductArticle.module.scss";
import { Product } from "../../../../templates/interfaces";
import { cartActions } from "../../../../store/cart/cart-slice";
import { CartItem } from "../../../../templates/interfaces";
import AddToCartForm from "../../../cart/AddToCartForm";

type Props = {
	article: Product;
};

const getFormattedPrice = (price: number) => {
	const newPrice = price.toFixed(2);

	return `£${newPrice}`;
};
type ProductPriceProps = Product;

const ProductPrice = (props: ProductPriceProps) => {
	const {
		onSale,
		price: { salePrice, stdPrice },
	} = props;

	let priceFormat = <></>;

	if (!onSale) {
		priceFormat = (
			<div className={classes.product__price}>
				<Typography
					gutterBottom
					variant="h6"
					variantMapping={{ h6: "p" }}
				>
					{getFormattedPrice(+stdPrice)}
				</Typography>
			</div>
		);
	}

	if (onSale) {
		priceFormat = (
			<>
				<span className="d-flex align-center">
					<Typography variant="h6" variantMapping={{ h6: "p" }}>
						{getFormattedPrice(+salePrice)}
					</Typography>
					<Typography
						className={`${classes.product__price} ${classes["--prev"]}`}
						variant="body2"
						variantMapping={{ body2: "p" }}
					>
						<s>{getFormattedPrice(+stdPrice)}</s>
					</Typography>
				</span>
			</>
		);
	}

	return <>{priceFormat}</>;
};

const ProductArticle = (props: Props) => {
	const { article: item } = props;
	const inputRef = createRef<HTMLInputElement>();
	const dispatch = useDispatch();

	const onAddToCart = (e: FormEvent<HTMLElement>) => {
		const inputValue: any = inputRef?.current?.value;
		const usePrice = item.onSale
			? item.price.salePrice
			: item.price.stdPrice;

		const prodData: CartItem = {
			id: item.id,
			name: item.name,
			value: usePrice * inputValue,
			quantity: +inputValue,
		};
		e.preventDefault();

		dispatch(cartActions.addToCart(prodData));
	};

	return (
		<>
			<article
				aria-labelledby={item.name}
				className={`cell tab-4 d-flex align-top ${classes.product}`}
			>
				<Image
					layout={`intrinsic`}
					objectFit="cover"
					objectPosition={"top"}
					height={400}
					width={400}
					src={item.image}
					alt={item.name}
				/>
				<div className={`cell ${classes.product__content}`}>
					<Typography
						gutterBottom
						variant="h5"
						variantMapping={{ h5: "h2" }}
						id={item.name}
					>
						{item.name}
					</Typography>

					<ProductPrice {...item} />
				</div>
				<div className={`align-self-bottom ${classes.product__footer}`}>
					<AddToCartForm
						onAddToCart={onAddToCart}
						ref={inputRef}
						item={item}
					/>
					{/* 
					<form onSubmit={onAddToCart} className="d-flex margin-x">
						<div className="cell mob-3">
							<Input
								inputRef={inputRef}
								id={item.name}
								type="number"
								placeholder="0"
							/>
						</div>
						<div className="cell auto d-flex align-right">
							<Button
								type="submit"
								color="secondary"
								variant="outlined"
							>
								Add to cart
							</Button>
						</div>
					</form> */}
				</div>
			</article>
		</>
	);
};

export default ProductArticle;
