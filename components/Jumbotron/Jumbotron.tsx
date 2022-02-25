//
import { ElementType } from "react";

//
import { PictureTag } from "../../templates/interfaces/image-interfaces";
import CustomTag from "../layout/CustomTag";

//
import classes from "./Jumbotron.module.scss";

type Props = {
	children?: any;
	tagName: ElementType;
	source: PictureTag;
};

const Jumbotron = (props: Props) => {
	const {
		tagName,
		source: { mob, tab, desk },
	} = props;
	console.log("Jumbotron props", props);

	if (!desk) {
		throw new Error("Missing desktop image data");
	}

	return (
		<CustomTag as={tagName} className={classes.jumbotron}>
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

			<div className="container">{props.children} </div>
		</CustomTag>
	);
};

export default Jumbotron;
