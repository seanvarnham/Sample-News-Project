import "@testing-library/jest-dom";

import { ReactNode, ReactElement } from "react";
import { Provider } from "react-redux";

import { createStore } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";

import { initialState } from "store/cart/cart-slice";

type Props = {
	children: ReactElement;
};

const store = createStore((state = initialState) => state, initialState);

const ReduxStoreWrapper = ({ children }: Props) => {
	return <Provider store={store}>{children}</Provider>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ReduxStoreWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
