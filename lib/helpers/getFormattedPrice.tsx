type ValueProp = {
	value: number;
};

export const getFormattedPrice = (price: number) => {
	const newPrice = price.toFixed(2);

	return `£${newPrice}`;
};

const FormattedPrice = (props: ValueProp) => {
	const { value } = props;
	const price = getFormattedPrice(value);

	return <>{price}</>;
};

export default FormattedPrice;
