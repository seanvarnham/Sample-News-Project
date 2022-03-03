type Props = {};

export const generateUniqueId = () => {
	return Math.random().toString(36);
};

const GenerateId = (props: Props) => {
	const _uid = generateUniqueId();

	return <>{_uid}</>;
};

export default GenerateId;
