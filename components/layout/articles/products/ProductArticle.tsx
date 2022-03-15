// React
import { FormEvent, createRef } from "react";

// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/cart/cart-slice";

// Next
import Link from "next/link";

// MUI
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

// Internals
import classes from "./ProductArticle.module.scss";
import AddToCartForm from "../../../cart/AddToCartForm";
import { CartItem, Product } from "../../../../templates/interfaces";
import { ProductPrice } from "@components/Products/Price";

interface IProductArticleProps {
	article: Product;
}

const ProductArticle = ({ article: item }: IProductArticleProps) => {
	const inputRef = createRef<HTMLInputElement>();
	const dispatch = useDispatch();

	const onAddToCart = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();

		const inputValue: any = inputRef?.current?.value;
		if (inputValue < 1) {
			return;
		}

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

		dispatch(addToCart(prodData));
	};

	return (
		<>
			<article
				aria-labelledby={item.name}
				className={`cell tab-4 d-flex align-top ${classes.product}`}
			>
				<Link href={`/products${item.url}`} passHref>
					<Image
						layout={`intrinsic`}
						objectFit="cover"
						objectPosition={"top"}
						height={400}
						width={400}
						src={item.image}
						alt={item.name}
					/>
				</Link>
				<div className={`cell ${classes.product__content}`}>
					<Typography
						gutterBottom
						variant="h5"
						variantMapping={{ h5: "h2" }}
						id={item.name}
					>
						{item.name}
					</Typography>

					<ProductPrice article={item} />
				</div>
				<div
					className={`cell align-self-bottom ${classes.product__footer}`}
				>
					<AddToCartForm
						onAddToCart={onAddToCart}
						ref={inputRef}
						item={item}
					/>
				</div>
			</article>
		</>
	);
};

export default ProductArticle;
