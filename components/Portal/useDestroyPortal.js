import { useEffect } from "react";

const destroyRootElement = (id) => {
	const rootContainer = document.querySelector(`#${id}`);
	rootContainer.remove();
};

const useDestroyPortal = (id, keepRoot = true) => {
	useEffect(() => {
		return () => {
			if (!keepRoot) {
				destroyRootElement(id);
			}
		};
	});
	return null;
};

export default useDestroyPortal;
