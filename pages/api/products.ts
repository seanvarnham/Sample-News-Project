import { Products } from "../../templates/interfaces";

import { NextApiRequest, NextApiResponse } from "next";
import ProductsList from "../../lib/data/ProductsList";

const productsListHandler = (
	req: NextApiRequest,
	res: NextApiResponse<Products>
) => {
	res.status(200).json(ProductsList);
};

export default productsListHandler;
