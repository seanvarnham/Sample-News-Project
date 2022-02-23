import Link from "next/link";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PageHead from "../components/header/PageHead";

const Home = () => {
	return (
		<div className={`wrapper`}>
			<PageHead title="Party Planner" description="" />

			<Header />

			<main className={`container`}>
				<h1 className="">
					Welcome to <Link href="https://nextjs.org">Next.js!</Link>
				</h1>
			</main>

			<Footer />
		</div>
	);
};

export default Home;
