import { FormEvent, useEffect, useState } from "react";

import Typography from "@material-ui/core/Typography";

import ProductArticle from "../../components/layout/articles/products";

import { Product, Products } from "../../templates/interfaces";

import { ProductFilters } from "../../components/Products";
import productsListHandler from "../api/products";
import PageHead from "../../components/header/PageHead";
import { generateUniqueId } from "lib/helpers/uniqueId";

interface IProductsPageProps {
	products: Products;
}

const ProductsPage = (props: IProductsPageProps) => {
	const { products } = props;
	const [filters, setFilters] = useState<string[]>([]);
	const [displayProducts, setDisplayProducts] = useState<Product[]>(products);

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

	const _uid = generateUniqueId();
	return (
		<>
			<PageHead title={"Products | Party Store"} />

			<div className="container">
				<div className="d-flex margin-x p-t-lg p-b-lg">
					<main className="order-2 cell mob-12 tab-9 desk-10">
						<Typography
							gutterBottom
							variant="h4"
							variantMapping={{ h4: "h1" }}
						>
							{`Products`}
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

					<aside
						className="order-1 cell mob-12 tab-3 desk-2"
						aria-labelledby={_uid || undefined}
					>
						<ProductFilters
							headingId={_uid}
							onChangeFilters={onChangeFilters}
							filters={filters}
						/>
					</aside>
				</div>
			</div>
		</>
	);
};

export default ProductsPage;

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
