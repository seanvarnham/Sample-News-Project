//
import { ChangeEventHandler } from "react";

//
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

//
import useThemeState from "lib/hooks/useThemeState";
import { useDispatch } from "react-redux";
import { colorActions } from "store/color/color-slice";

//
interface Styles extends Partial<Record<SwitchClassKey, string>> {
	focusVisible?: string;
}
interface Props extends SwitchProps {
	classes: Styles;
}

const Styles = (theme: Theme) => {
	return createStyles({
		root: {
			width: 42,
			height: 26,
			padding: 0,
			margin: theme.spacing(1),
		},
		switchBase: {
			padding: 1,
			"&$checked": {
				transform: "translateX(16px)",
				color: `var(--egyptian-blue)`,
				"& + $track": {
					backgroundColor: "#585858",
					opacity: 1,
					border: "none",
				},
			},
			"&$focusVisible $thumb": {
				color: "#585858",
				border: "6px solid #fff",
			},
		},
		thumb: {
			width: 24,
			height: 24,
		},
		track: {
			borderRadius: 26 / 2,
			border: `1px solid ${theme.palette.grey[400]}`,
			backgroundColor: theme.palette.grey[50],
			opacity: 1,
			transition: theme.transitions.create([
				"background-color",
				"border",
			]),
		},
		checked: {},
	});
};

const ThemeToggle = (props: Props) => {
	const { classes } = props;
	const theme = useThemeState();
	const dispatch = useDispatch();
	const currentlyDark = theme.isDarkMode;

	const onToggleTheme = () => {
		dispatch(
			colorActions.changeColorScheme({
				mode: currentlyDark ? "light" : "dark",
			})
		);

		console.log("theme", theme);
	};

	return (
		<>
			<Switch
				focusVisibleClassName={classes.focusVisible}
				disableRipple
				onChange={onToggleTheme}
				classes={{
					root: classes.root,
					switchBase: classes.switchBase,
					thumb: classes.thumb,
					track: classes.track,
					checked: classes.checked,
				}}
				{...props}
			/>
		</>
	);
};

export default withStyles(Styles)(ThemeToggle);
