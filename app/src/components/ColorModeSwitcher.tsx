import { PlacementWithLogical, TextProps, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Clickable } from "./Clickable";
import { DayIcon, NightIcon } from "./Icons";

type IconSwitcherProps = {
	size?: TextProps["fontSize"];
	showTooltip?: boolean,
	tooltipPosition?: PlacementWithLogical;
};

export const ColorModeSwicther = (props: IconSwitcherProps) => {
	const { toggleColorMode } = useColorMode();

	return (
		<Tooltip
			aria-label="Switch color mode"
			label={`Switch to ${useColorModeValue("dark", "light")} mode`}
			placement={props.tooltipPosition || "auto"}
			isDisabled={!props.showTooltip}
		>
			<Clickable
				onClick={toggleColorMode}
			>
				{useColorModeValue(<DayIcon fontSize={props.size} />, <NightIcon fontSize={props.size} />)}
			</Clickable>
		</Tooltip >
	);
};
