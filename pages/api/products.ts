// import { Products } from "../../templates/interfaces";

// import { NextApiRequest, NextApiResponse } from "next";
// import ProductsList from "../../lib/data/ProductsList";

// const productsListHandler = (
// 	req: NextApiRequest,
// 	res: NextApiResponse<Products>
// ) => {
// 	res.status(200).json(ProductsList);
// };

// export default productsListHandler;
import { Products } from "../../templates/interfaces";

import { NextApiRequest, NextApiResponse } from "next";
// import ProductsList from "../../lib/data/ProductsList";

const productsListHandler = async () => {
	const FIREBASE = process.env.FIREBASE_URL;

	try {
		// Connect the client to the server
		const response = await fetch(`${FIREBASE}/products.json`);
		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Could not fetch products.");
		}

		return data;
	} catch (error) {
		console.log("error", error);
	}

	// res.status(200).json(ProductsList);
};

export default productsListHandler;
