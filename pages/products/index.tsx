import { FormEvent, useEffect, useState } from "react";
import { useFetchProductsQuery } from "../../store/products/product-slice";
// import categories from "../../lib/data/categories.json";

import Typography from "@material-ui/core/Typography";

import ProductArticle from "../../components/layout/articles/products/ProductArticle";

import { Product, Products } from "../../templates/interfaces";

import ProductFilters from "../../components/Products/ProductFilters";
import productsListHandler from "../api/products";

type Props = {
	products: Products;
};

const Products = (props: Props) => {
	const { products } = props;
	const [filters, setFilters] = useState<string[]>([]);
	const [displayProducts, setDisplayProducts] = useState<Product[]>(products);
	// const [productsReady, setProductsReady] = useState<boolean>(false);

	// Get Products via redux
	// const products = useFetchProductsQuery();
	// const { isError, isSuccess, isLoading, data } = products;

	const onChangeFilters = (e: FormEvent<HTMLInputElement>, cat: string) => {
		let prevFilters = filters.slice();
		let newFilters: string[] = [];

		if (filters.length > 0) {
			if (prevFilters.includes(cat)) {
				newFilters = prevFilters.filter((filter) => filter !== cat);
			} else {
				newFilters = [cat, ...prevFilters];
			}
		} else {
			newFilters.push(cat);
		}

		setFilters(newFilters);
	};

	useEffect(() => {
		const filteredProducts = products?.filter((item) => {
			return item.categories.some((cat) => filters.includes(cat));
		});

		if (filteredProducts?.length) {
			setDisplayProducts(filteredProducts);
		} else {
			const newData: Product[] = products || [];
			setDisplayProducts(newData);
		}
	}, [filters, products]);

	return (
		<div className="container">
			<div className="d-flex margin-x p-t-lg p-b-lg">
				<aside className="cell mob-12 tab-3 desk-2">
					<ProductFilters
						onChangeFilters={onChangeFilters}
						filters={filters}
					/>
				</aside>

				<main className="cell mob-12 tab-9 desk-10">
					<Typography variant="h3" variantMapping={{ h3: "h1" }}>
						Products
					</Typography>

					<section className="d-flex margin-x">
						{displayProducts.length &&
							displayProducts.map((item) => {
								return (
									<ProductArticle
										key={item.id}
										article={item}
									/>
								);
							})}
					</section>
				</main>
			</div>
		</div>
	);
};

export default Products;

export const getServerSideProps = async (context: any) => {
	const res = await productsListHandler().then((data) => {
		return data;
	});

	return {
		props: {
			products: res,
		},
	};
};
