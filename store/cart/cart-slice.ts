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
		clearCart(state, action) {
			state = initialState;
		},
		addToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);

			if (!existingItem) {
				state.items.push(newItem);
			} else {
				console.log("existingItem", existingItem);
				existingItem.quantity =
					existingItem.quantity + newItem.quantity;
				existingItem.value = existingItem.value + newItem.value;
			}

			const totalValue = state.items.map((prod: CartItem) => prod.value);
			const totalQuantity = state.items.map(
				(prod: CartItem) => prod.quantity
			);

			state.totalValue = totalValue.reduce((prev, curr) => prev + curr);
			state.totalQuantity = totalQuantity.reduce(
				(prev, curr) => prev + curr
			);
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
