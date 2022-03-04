import { createSlice } from "@reduxjs/toolkit";
import { ColorScheme } from "../../templates/interfaces";

export const initialState: ColorScheme = {
	mode: "light",
	isDarkMode: false,
};

export const colorSlice = createSlice({
	name: "colorScheme",
	initialState,
	reducers: {
		changeColorScheme(state, action) {
			state.mode = action.payload.mode;
			state.isDarkMode = action.payload.mode === "dark";
		},
	},
});

export const colorActions = colorSlice.actions;
export default colorSlice.reducer;
