// React

// Redux

// Next

// MUI
import Typography from "@mui/material/Typography";

// Internals
import { Product } from "templates/interfaces";
import FormattedPrice from "lib/helpers/getFormattedPrice";
import classes from "./ProductPrice.module.scss";

interface IProductPriceProps {
	article: Product;
}

const ProductPrice = ({
	article: {
		onSale,
		price: { salePrice, stdPrice },
	},
}: IProductPriceProps) => {
	let priceFormat = <></>;

	if (!onSale) {
		priceFormat = (
			<div className={classes.product__price}>
				<Typography
					gutterBottom
					variant="h6"
					variantMapping={{ h6: "p" }}
				>
					<FormattedPrice value={+stdPrice} />
				</Typography>
			</div>
		);
	}

	if (onSale) {
		priceFormat = (
			<>
				<span className="d-flex align-center">
					<Typography variant="h6" variantMapping={{ h6: "p" }}>
						<FormattedPrice value={+salePrice} />
					</Typography>

					<Typography
						className={`${classes.product__price} ${classes["--prev"]}`}
						variant="body2"
						variantMapping={{ body2: "p" }}
					>
						<s>
							<FormattedPrice value={+stdPrice} />
						</s>
					</Typography>
				</span>
			</>
		);
	}

	return <>{priceFormat}</>;
};

export default ProductPrice;
