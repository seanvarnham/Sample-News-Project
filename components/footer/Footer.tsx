import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className={`has-jasmine-background-color`}>
			<div className={`container`}>
				<Link href={`https://vercel.com`}>Powered by</Link>
			</div>
		</footer>
	);
};

export default Footer;
