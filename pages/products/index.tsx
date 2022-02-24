import Image from "next/image";
import { useFetchProductsQuery } from "../../store/products/product-slice";

type Props = {};

const ProductsListing = (props: Props) => {
	const products = useFetchProductsQuery();
	const { isError, isFetching, isSuccess, isLoading, data } = products;
	console.log("products", products);

	const getFormattedPrice = (price: number) => {
		const newPrice = price.toFixed(2);

		return `£${newPrice}`;
	};

	const productArticles = products?.data?.map((item) => {
		return (
			<article className="tab-4 desk-3" key={item.id}>
				<div>
					<Image
						layout={`intrinsic`}
						objectFit="cover"
						height={400}
						width={400}
						src={item.image}
					/>
				</div>
				<div>{item.name}</div>
				<div>{getFormattedPrice(+item.price.stdPrice)}</div>
			</article>
		);
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
					<div className="d-flex">
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
