import Document, {
	DocumentContext,
	Html,
	Main,
	NextScript,
	Head,
} from "next/document";

interface DocumentProps {
	lang?: string;
	pageURL?: string;
	xcomRegValues?: any;
}

class MyDocument extends Document<DocumentProps> {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		// console.log("ctx", ctx);
		// const state = ctx.store.getState();
		const pageURL = ctx.req?.url;

		return {
			...initialProps,
			pageURL,
		};
	}

	render() {
		// const {  } = this.props;

		return (
			<Html>
				<Head></Head>
				<body>
					<div id="modalRoot" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
