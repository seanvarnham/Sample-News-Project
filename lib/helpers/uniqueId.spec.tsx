import "@testing-library/jest-dom";
import generateId from "./uniqueId";

describe("generateUniqueId", () => {
	const returnedFormat = generateId();

	it("is a function", () => {
		expect(typeof generateId).toEqual("function");
	});

	it("should return a string", () => {
		expect(typeof generateId()).toEqual("string");
	});
});

// describe("FormattedPrice Component", () => {
// 	const uid = generateId();
// 	// console.log("container", container);

// 	it("should return a string", () => {
// 		expect(screen).toHaveTextContent();
// 	});
// });
