import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, cartState } from "../../templates/interfaces";

// item = [
//     'id',
// 	'name',
// 	'value',
// 	'quantity',
// ]

const initialState = {
	items: [] as CartItem[],
	totalValue: 0,
	totalQuantity: 0,
} as cartState;

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addToCart(state, action) {
			const newItem = action.payload;
			const existingItem = action.payload.totalQuantity;
			state.totalQuantity++;
		},
		// incrementByAmount(state, action: PayloadAction<number>) {},
	},
});

export const { replaceCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
