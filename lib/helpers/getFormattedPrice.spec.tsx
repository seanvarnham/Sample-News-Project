import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormattedPrice, { getFormattedPrice } from "./getFormattedPrice";

describe("FormattedPrice Component", () => {
	const { container } = render(<FormattedPrice value={2} />);

	it("should return a price with two decimal places", () => {
		expect(screen.getByText(/2.00/i)).toBeInTheDocument();
	});
});

describe("getFormattedPrice", () => {
	const returnedFormat = getFormattedPrice(2);

	it("is a function", () => {
		expect(typeof getFormattedPrice).toEqual("function");
	});

	it("should return a price with the GBP symbol", () => {
		expect(returnedFormat).toEqual("£2.00");
	});
});
