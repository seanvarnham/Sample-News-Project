import { render, screen } from "../../test-utils/testing-library-utils";

import Header from "./Header";

jest.mock("next/router", () => ({
	useRouter(): {
		route: string;
		pathname: string;
		query: string;
		asPath: string;
	} {
		return {
			route: "/",
			pathname: "",
			query: "",
			asPath: "",
		};
	},
}));

describe("Products Page", () => {
	const { container } = render(<Header />);

	it("should first", () => {
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});
});
