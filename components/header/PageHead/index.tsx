import Head from "next/head";

interface IPageHeadProps {
	title: string;
	description?: string;
}

const PageHead = ({ title, description }: IPageHeadProps) => {
	return (
		<Head>
			<title>{title || "Sample App"}</title>
			{description && (
				<meta
					name="description"
					content={description || "by Sean Varnham"}
				/>
			)}
			<link rel="icon" href="/favicon.ico" />
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width" />
			<meta name="robots" content="noindex, nofollow" />
		</Head>
	);
};

export default PageHead;
