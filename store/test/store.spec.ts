import reducer, { initialState, addToCart } from "store/cart/cart-slice";

describe("Redux Cart Tests", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, initialState)).toEqual({
			items: [],
			totalValue: 0,
			totalQuantity: 0,
		});
	});

	it("should handle items being added to an empty basket", () => {
		const previousState = initialState;
		const addItem = {
			id: 1001,
			name: "champagne",
			value: 31,
			quantity: 1,
		};
		expect(reducer(previousState, addToCart(addItem))).toEqual({
			items: [
				{
					id: 1001,
					name: "champagne",
					value: 31,
					quantity: 1,
				},
			],
			totalValue: 31,
			totalQuantity: 1,
		});
	});

	it("should handle items being added to an existing basket", () => {
		const previousState = {
			...initialState,
			items: [
				{
					id: 1001,
					name: "champagne",
					value: 31,
					quantity: 1,
				},
			],
		};

		const addItem = {
			id: 2002,
			name: "PCR Test",
			value: 42,
			quantity: 2,
		};

		expect(reducer(previousState, addToCart(addItem))).toEqual({
			items: [
				{
					id: 1001,
					name: "champagne",
					value: 31,
					quantity: 1,
				},
				{
					id: 2002,
					name: "PCR Test",
					value: 42,
					quantity: 2,
				},
			],
			totalValue: 73,
			totalQuantity: 3,
		});
	});
});
