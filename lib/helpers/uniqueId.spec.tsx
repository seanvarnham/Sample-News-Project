import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GenerateId, { generateUniqueId } from "./uniqueId";

describe("generateUniqueId", () => {
	const returnedFormat = generateUniqueId();

	it("is a function", () => {
		expect(typeof generateUniqueId).toEqual("function");
	});

	it("should return a string", () => {
		expect(typeof generateUniqueId()).toEqual("string");
	});
});

// describe("FormattedPrice Component", () => {
// 	const { container } = render(<GenerateId />);
// 	// console.log("container", container);

// 	it("should return a string", () => {
// 		expect(screen).toHaveTextContent();
// 	});
// });
