//
import { ElementType, ReactNode } from "react";

//
import { PictureTag } from "../../templates/interfaces/image-interfaces";
import CustomTag from "../layout/Custom";

//
import compClasses from "./Jumbotron.module.scss";

interface IJumbotronProps {
	children?: ReactNode;
	classes: string;
	tagName: ElementType;
	source: PictureTag;
}

const Jumbotron = ({
	children,
	classes,
	tagName,
	source: { mob, tab, desk },
}: IJumbotronProps) => {
	// console.log("Jumbotron props", props);

	if (!desk) {
		throw new Error("Missing desktop image data");
	}

	return (
		<CustomTag
			as={tagName}
			className={`${compClasses.jumbotron} ${classes}`}
		>
			<picture>
				{mob?.srcSet && (
					<source
						srcSet={mob.srcSet}
						media="(max-width: 440px)"
						type={tab?.type}
					/>
				)}
				{tab?.srcSet && (
					<source
						srcSet={tab.srcSet}
						media="(max-width: 880px)"
						type={tab.type}
					/>
				)}
				<img
					src={desk.srcSet}
					height={desk.height}
					width={desk.width}
					alt={desk.alt || ""}
				/>
			</picture>

			<div className="container">{children}</div>
		</CustomTag>
	);
};

export default Jumbotron;
