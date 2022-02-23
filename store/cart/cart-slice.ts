import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, cartState } from "../../templates/interfaces";

// item = [
//     'id',
// 	'name',
// 	'value',
// 	'quantity',
// ]

export const initialState: cartState = {
	items: [] as CartItem[],
	totalValue: 0,
	totalQuantity: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		replaceCart(state, action) {
			console.log("replaceCart state", state);
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addToCart(state, action) {
			console.log("addToCart state", state);
			const newItem = action.payload;
			const existingItem = action.payload.totalQuantity;
			state.totalQuantity++;
		},
		removeFromCart(state, action) {
			console.log("removeFromCart state", state);
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity--;

			if (existingItem?.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				// existingItem.quantity--;
			}
		},
		// incrementByAmount(state, action: PayloadAction<number>) {},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
