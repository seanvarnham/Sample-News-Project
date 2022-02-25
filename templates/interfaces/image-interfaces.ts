export interface PictureSource {
	srcSet: string;
	type: string;
}
export interface DesktopPictureSource extends PictureSource {
	height: number;
	width: number;
	alt: string;
}

export interface PictureTag {
	mob?: PictureSource | undefined;
	tab?: PictureSource | undefined;
	desk: DesktopPictureSource | undefined;
}
