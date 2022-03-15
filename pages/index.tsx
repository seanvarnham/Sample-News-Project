import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Link from "next/link";

import Jumbotron from "../components/Jumbotron";
import PageHead from "../components/header/PageHead";
// import { Product } from "../templates/interfaces";

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
			<PageHead title={"No. 10 Lockdown Party Store"} />

			<main className="main">
				<article>
					<Jumbotron
						tagName={`header`}
						source={pictures}
						classes={`d-flex align-center-middle text-align-center`}
					>
						<Typography
							gutterBottom
							variant="h2"
							variantMapping={{ h2: "h1" }}
						>
							Welcome to the No. 10 Party Shop
						</Typography>
						<Link href={`/products`} passHref>
							<Button variant="contained" color="secondary">
								{`Let's get wasted!`}
							</Button>
						</Link>
					</Jumbotron>
				</article>
			</main>
		</>
	);
};

export default Home;
