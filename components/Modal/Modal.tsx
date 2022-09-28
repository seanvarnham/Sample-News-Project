import { useSelector } from "react-redux";
import { ReducerMap } from "../../templates/interfaces";

type IModalProps = {};

const Modal = (props: IModalProps) => {
	const cart = useSelector((state: ReducerMap) => state.cart);

	return (
		<>
			<div>Modal</div>
		</>
	);
};

export default Modal;
