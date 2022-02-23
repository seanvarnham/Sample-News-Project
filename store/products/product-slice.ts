import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products, Product } from "../../templates/interfaces";

const BASE_URL = "http://localhost:3000/api";

const productsSlice = createApi({
	reducerPath: "products",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (builder) => {
		return {
			fetchProducts: builder.query<Products, number | void>({
				query: () => `/products`,
			}),
		};
	},
});

export const { useFetchProductsQuery } = productsSlice;
export default productsSlice;
