import PageHead from "../../components/header/PageHead";
import classes from "../../styles/pages/contact/contact.module.scss";

interface IContactProps {}

const Contact = (props: IContactProps) => {
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
