import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const renderWithContext = (ui, options) =>
	render(ui, { wrapper: Provider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithContext as render };
