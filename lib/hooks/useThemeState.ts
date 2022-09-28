import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

const useThemeState = () => {
	const themeState = useSelector((state: ReducerMap) => state.colorScheme);

	if (!themeState) {
		throw new Error(
			"useThemeState couldn't find a colour theme in the state."
		);
	}

	return themeState;
};

export default useThemeState;
