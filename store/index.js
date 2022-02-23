import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import productsSlice from "./products/product-slice";

const store = configureStore({
	reducer: {
		[productsSlice.reducerPath]: productsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
