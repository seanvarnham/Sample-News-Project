import { Typography } from "@material-ui/core";
import Image from "next/image";
import ProductArticle from "../../components/layout/articles/products/ProductArticle";
import { useFetchProductsQuery } from "../../store/products/product-slice";

type Props = {};

const ProductsListing = (props: Props) => {
	const products = useFetchProductsQuery();
	const { isError, isFetching, isSuccess, isLoading, data } = products;
	console.log("products", products);

	const productArticles = products.data?.map((item) => {
		return <ProductArticle key={item.id} article={item} />;
	});

	return (
		<main className={`container`}>
			<h1>Products</h1>
			{isLoading && (
				<>
					<div className="d-flex">{`Loading...`}</div>
				</>
			)}
			{isSuccess && (
				<>
					<div className="d-flex margin-x">
						{products?.data && data?.length && (
							<>{productArticles}</>
						)}
					</div>
				</>
			)}
		</main>
	);
};

export default ProductsListing;

export const getServerSideProps = async (context: any) => {
	const response = fetch("http://localhost:3000/api/products");
	const data = (await response).json();
	console.log("data", data);
	return {
		props: {}, // will be passed to the page component as props
	};
};
