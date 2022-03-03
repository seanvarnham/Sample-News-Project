import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ReducerMap } from "../../templates/interfaces";
import { render, screen } from "@testing-library/react";
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

const initialState: ReducerMap = {
	cart: {
		items: [],
		totalValue: 0,
		totalQuantity: 0,
	},
};

const store = createStore((state = initialState) => state, initialState);

describe("Products Page", () => {
	const { container } = render(
		<Provider store={store}>
			<Header />
		</Provider>
	);

	it("should first", () => {
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});
});
