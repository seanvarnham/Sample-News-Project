// Internals
import { Product } from "../../../../templates/interfaces";
import classes from "./ProductArticle.module.scss";

// Externals
import { Typography } from "@material-ui/core";
import Image from "next/image";

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
				<Typography variant="h6" variantMapping={{ h6: "p" }}>
					{getFormattedPrice(+salePrice)}
				</Typography>
				<Typography
					className={`${classes.product__price} ${classes["--prev"]}`}
					gutterBottom
					variant="body2"
					variantMapping={{ body2: "p" }}
				>
					<s>{getFormattedPrice(+stdPrice)}</s>
				</Typography>
			</>
		);
	}

	return <>{priceFormat}</>;
};

const ProductArticle = (props: Props) => {
	const { article: item } = props;
	return (
		<>
			<article
				aria-labelledby={item.name}
				className={`cell tab-4 desk-3 ${classes.product}`}
			>
				<Image
					layout={`intrinsic`}
					objectFit="cover"
					height={400}
					width={400}
					src={item.image}
				/>
				<div className={classes["product__content"]}>
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
			</article>
		</>
	);
};

export default ProductArticle;
