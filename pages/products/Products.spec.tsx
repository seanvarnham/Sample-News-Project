import { render, screen } from "../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import ProductsPage from ".";

describe("Products Page basics", () => {
	it("should render the product page H1 heading", () => {
		render(<ProductsPage products={[]} />);
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
	});

	//
	it("should render the H1 with the heading 'Products'", () => {
		render(<ProductsPage products={[]} />);
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toHaveTextContent("Products");
	});
});
describe("Products Page", () => {
	it("should render the sidebar for filters", () => {
		render(<ProductsPage products={[]} />);

		expect(screen.getByRole("complementary"));
		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
			"Filter by"
		);
	});

	it("should render sidebar checkboxes", () => {
		render(<ProductsPage products={[]} />);
		const accessories = screen.getByLabelText(/accessories/i);
		expect(accessories).toBeInTheDocument();
	});

	it("should mark the accessories checkbox as checked (on click)", () => {
		render(<ProductsPage products={[]} />);
		const checkbox = screen.getByLabelText(/accessories/i);

		userEvent.click(checkbox);

		expect(checkbox).toBeChecked();
	});
});
