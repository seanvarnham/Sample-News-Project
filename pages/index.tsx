import Link from "next/link";
import PageHead from "../components/header/PageHead";

const Home = () => {
	return (
		<>
			<PageHead title={"No. 10 Lockdown Party Store"} description={``} />

			<main className={`container`}>
				<h1 className="">
					Welcome to <Link href="https://nextjs.org">Next.js!</Link>
				</h1>
			</main>
		</>
	);
};

export default Home;
