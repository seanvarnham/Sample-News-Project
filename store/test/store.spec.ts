import reducer, { initialState } from "store/cart/cart-slice";

describe("Redux Cart Tests", () => {
	it("should return the initial state", () => {
		console.log("reducer(undefined, {})", reducer(undefined, {}));
		expect(reducer(undefined, {})).toEqual({
			items: [],
			totalValue: 0,
			totalQuantity: 0,
		});
	});
});
