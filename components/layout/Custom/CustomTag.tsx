import { ElementType, HTMLAttributes } from "react";

interface ICustomTagProps extends HTMLAttributes<HTMLOrSVGElement> {
	as?: ElementType;
}

const CustomTag = (props: ICustomTagProps) => {
	const { as: Tag = "div", ...otherProps } = props;

	return <Tag {...otherProps}>{props.children}</Tag>;
};

export default CustomTag;
