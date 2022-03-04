import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import cartSlice from "./cart/cart-slice";
import colorSlice from "./color/color-slice";
import productsSlice from "./products/product-slice";

const store = configureStore({
	reducer: {
		cart: cartSlice,
		colorScheme: colorSlice,
		[productsSlice.reducerPath]: productsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
