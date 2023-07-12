import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { PlacementWithLogical, TextProps, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Clickable } from "./Clickable";
import { DayIcon, NightIcon } from "./Icons";
import { TooltipWithLegend } from "./TooltipWithLegend";

type IconSwitcherProps = {
	size?: TextProps["fontSize"];
	showTooltip?: boolean,
	tooltipPosition?: PlacementWithLogical;
};

export const ColorModeSwicther = (props: IconSwitcherProps) => {

	const { toggleColorMode } = useColorMode();
	useKeyboardShortcut(["ctrl", "shift", "l"], toggleColorMode);

	return (
		<TooltipWithLegend
			label={`Switch to ${useColorModeValue("dark", "light")} mode`}
			legend="ctrl + shift + L"
			placement={props.tooltipPosition || "auto"}
			isDisabled={!props.showTooltip}
		>
			<Clickable
				onClick={toggleColorMode}
			>
				{useColorModeValue(<DayIcon fontSize={props.size} />, <NightIcon fontSize={props.size} />)}
			</Clickable>
		</TooltipWithLegend>
	);
};
