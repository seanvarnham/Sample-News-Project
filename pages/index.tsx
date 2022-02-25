import { Button } from "@material-ui/core";
import Image from "next/image";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import PageHead from "../components/header/PageHead";

const Home = () => {
	const pictures = {
		mob: {
			srcSet: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
			type: "image/jpeg",
		},
		tab: {
			srcSet: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300",
			type: "image/jpeg",
		},
		desk: {
			srcSet: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
			type: "image/jpeg",
			height: 1365,
			width: 2048,
			alt: "",
		},
	};
	return (
		<>
			<PageHead title={"No. 10 Lockdown Party Store"} description={``} />

			<main className={``}>
				<article>
					<Jumbotron tagName={`header`} source={pictures}>
						<h1 className="">Welcome to the No. 10 Party Shop</h1>
						<Button variant="contained" color="secondary">
							Let's get wasted!
						</Button>
					</Jumbotron>
				</article>
			</main>
		</>
	);
};

export default Home;
