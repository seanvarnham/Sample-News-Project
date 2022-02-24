import { useRouter } from "next/router";
import { Product, Products } from "../../templates/interfaces";

type Props = {};

const SingleProduct = (props: Props) => {
	const router = useRouter();
	console.log("Page Slug: ", router.query.slug);
	return <div>SingleProduct</div>;
};

export default SingleProduct;

// export const getStaticProps = async () => {
// 	const response = fetch("http://localhost:3000/api/products");
// 	const data = (await response).json();

// 	return {
// 		props: {
// 			// thisPageId: meetupId,
// 			products: data,
// 			revalidate: 60 * 60 * 24 * 15,
// 		},
// 	};
// };

// export const getStaticPaths = async () => {
// 	const response = await fetch("http://localhost:3000/api/products");
// 	const data = (await response).json();
// 	console.log("data", data);
// 	// data?.map((item:Product) => {
// 	// 	return { params: {item} },
// 	// })
// 	return {
// 		paths: [
// 			{ params: { slug: "Champagne" } }, // See the "paths" section below
// 		],
// 		fallback: true,
// 	};
// };
