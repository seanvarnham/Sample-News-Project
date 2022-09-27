export const generateUniqueId = () => {
	return Math.random().toString(36);
};

const generateId = () => generateUniqueId();

export default generateId;
