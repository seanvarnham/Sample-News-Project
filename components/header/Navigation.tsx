import Link from "next/link";
import { useRouter } from "next/router";
import nav from "../../lib/data/nav-menu.json";
import { NavItem } from "../../templates/interfaces";

import classes from "./Navigation.module.scss";

type Props = {
	label: string;
};

const Navigation = (props: Props) => {
	const { label } = props;
	const router = useRouter();

	const current = router.route;

	return (
		<nav aria-label={label} className={classes.navigation}>
			<ul className="d-flex align-right">
				{(nav as NavItem[]) &&
					nav.map((navItem: NavItem) => {
						console.log("navItem", navItem);
						return (
							<li key={navItem.name}>
								<Link passHref={true} href={navItem.url}>
									<a>{navItem.name}</a>
								</Link>
							</li>
						);
					})}
			</ul>
		</nav>
	);
};

export default Navigation;
