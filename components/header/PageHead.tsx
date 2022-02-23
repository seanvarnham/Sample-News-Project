import Head from "next/head";

type Props = {
	title: string | undefined;
	description: string | undefined;
};

const PageHead = (props: Props) => {
	const { title, description } = props;
	return (
		<Head>
			<title>{title || "Sample App"}</title>
			<meta
				name="description"
				content={description || "by Sean Varnham"}
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default PageHead;
