import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

type Props = {};

const Modal = (props: Props) => {
	const cart = useSelector((state: ReducerMap) => state.cart);

	return (
		<>
			<div>Modal</div>
		</>
	);
};

export default Modal;
