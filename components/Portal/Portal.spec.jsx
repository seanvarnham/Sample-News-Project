import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Portal from "./Portal";

describe("Portal component tests", () => {
	const renderComponent = ({ id, children }) =>
		render(<Portal id={id}>{children}</Portal>);

	it("should not render without portal element", () => {
		const { container } = render(<Portal />);
		expect(container).toMatchSnapshot();
	});
});
