import { ElementType, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
	as?: ElementType;
}

const CustomTag = (props: Props) => {
	const { as: Tag = "div", ...otherProps } = props;

	return <Tag {...otherProps}>{props.children}</Tag>;
};

export default CustomTag;
