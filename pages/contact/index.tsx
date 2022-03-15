import PageHead from "../../components/header/PageHead";
import classes from "../../styles/pages/contact/contact.module.scss";

type Props = {};

const Contact = (props: Props) => {
	return (
		<>
			<PageHead title={"Contact | Party Store"} />

			<main>
				<article className="container p-t-lg p-b-lg">
					<section
						className={classes.wrapper}
					>{`Nothing to see here..`}</section>
				</article>
			</main>
		</>
	);
};

export default Contact;
