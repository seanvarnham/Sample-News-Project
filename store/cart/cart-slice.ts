import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	CartItem,
	cartState,
	Product,
	Products,
} from "../../templates/interfaces";

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
			if (typeof window !== "undefined") {
				localStorage.setItem("cart", JSON.stringify(initialState));
			}
		},
		addToCart(state, action) {
			if (typeof window !== "undefined") {
				const previousCart = localStorage.getItem("cart");
				console.log("previousCart", previousCart);

				let prevCartData;
				if (previousCart) {
					prevCartData = JSON.parse(previousCart);
					console.log("prevCartData", prevCartData);

					state.items = prevCartData.items;
					state.totalValue = prevCartData.totalValue;
					state.totalQuantity = prevCartData.totalQuantity;
				}
			}

			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);

			if (!existingItem) {
				state.items.push(newItem);
			} else {
				// console.log("existingItem", existingItem);
				existingItem.quantity =
					existingItem.quantity + newItem.quantity;
				existingItem.value = existingItem.value + newItem.value;
			}

			const totalValue = state.items.map((prod: CartItem) => prod.value);
			const totalQuantity = state.items.map(
				(prod: CartItem) => prod.quantity
			);

			const reducedTotalValue = totalValue.reduce(
				(prev, curr) => prev + curr
			);
			const reducedTotalQuantity = totalQuantity.reduce(
				(prev, curr) => prev + curr
			);
			state.totalValue = reducedTotalValue;
			state.totalQuantity = reducedTotalQuantity;

			if (typeof window !== "undefined") {
				const storeLocally = {
					items: state.items,
					totalValue: reducedTotalValue,
					totalQuantity: reducedTotalQuantity,
				};
				localStorage.setItem("cart", JSON.stringify(storeLocally));
			}
		},
		removeFromCart(state, action) {
			// console.log("removeFromCart state", state);
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity--;

			if (existingItem?.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				// existingItem.quantity--;
			}

			localStorage.setItem("cart", JSON.stringify(state));
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
