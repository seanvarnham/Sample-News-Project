import Image from "next/image";

import Typography from "@material-ui/core/Typography";

import { Product } from "../../templates/interfaces";
import productsListHandler from "../api/products";

import PageHead from "@components/header/PageHead";
import AddToCart from "../../components/cart/AddToCart";
import classes from "./single-product.module.scss";

type Props = {
	product: Product;
};

const SingleProduct = (props: Props) => {
	const { product } = props;

	let productDescription;
	if (product.description) {
		productDescription = product.description.split(`\\nl`).map((para) => (
			<Typography paragraph key={para}>
				{para}
			</Typography>
		));
	} else {
		productDescription = (
			<>
				<Typography
					variant="subtitle1"
					variantMapping={{ subtitle1: "p" }}
					className="p-b-md"
				>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet id ipsum nec placerat.`}</Typography>
				<Typography
					variant="subtitle1"
					variantMapping={{ subtitle1: "p" }}
					className="p-b-md"
				>{`Proin luctus pharetra pharetra. Morbi laoreet sagittis odio sit amet tempus. Nam congue auctor viverra. Mauris faucibus magna ut justo consequat, in vehicula diam dapibus.`}</Typography>
			</>
		);
	}

	return (
		<>
			<PageHead title={`${product.name} | Party Store`} />

			<main className="container p-t-lg p-b-lg">
				<article className={`cell single-product`}>
					<section className="cell d-flex margin-x">
						<div className="cell mob-12 tab-6">
							<h1>{product.name}</h1>

							<ul
								className={`d-flex no-bullet single-product__categories ${classes.pills}`}
								aria-label="List of assigned categories for this product"
							>
								{product.categories &&
									product.categories.map((cat) => {
										return (
											<li
												key={cat}
												className="single-product__category"
											>
												{cat}
											</li>
										);
									})}
							</ul>

							{productDescription}

							<AddToCart product={product} />
						</div>
						<div className="cell mob-12 tab-6">
							<Image
								layout={`intrinsic`}
								objectFit="cover"
								height={500}
								width={900}
								src={product.image}
								alt={product.name}
							/>
						</div>
					</section>
				</article>
			</main>
		</>
	);
};

export default SingleProduct;

export const getStaticPaths = async () => {
	const data = await productsListHandler().then((res) => {
		return res;
	});

	return {
		paths: data?.map((item: Product) => ({
			params: {
				slug: item.url.replace("/", ""),
			},
		})),
		fallback: false,
	};
};

export const getStaticProps = async (context: any) => {
	const data = await productsListHandler().then((res) => {
		return res;
	});

	const itemSlug = context?.params.slug;

	return {
		props: {
			product: data.find((item: Product) => item.url === `/${itemSlug}`),
		},
	};
};
