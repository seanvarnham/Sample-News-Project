// Externals
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

// Internals
import nav from "../../../lib/data/nav-menu.json";
import { NavItem } from "../../../templates/interfaces";

// Styles
import classes from "./Navigation.module.scss";

interface INavigationProps {
	label: string;
}

const Navigation = ({ label }: INavigationProps) => {
	const router = useRouter();

	const current = router.route;

	const navItemClasses = (url: string) =>
		classnames(classes.nav__item, {
			["nav__item--current"]: current === url,
		});

	return (
		<nav aria-label={label} className={`${classes.navigation}`}>
			<ul className="d-flex align-right padding-x no-bullet">
				{(nav as NavItem[]) &&
					nav.map((navItem: NavItem) => {
						return (
							<li
								key={navItem.name}
								className={navItemClasses(navItem.url)}
							>
								<Link href={navItem.url} passHref>
									<a aria-current={current === navItem.url}>
										{navItem.name}
									</a>
								</Link>
							</li>
						);
					})}
			</ul>
		</nav>
	);
};

export default Navigation;
