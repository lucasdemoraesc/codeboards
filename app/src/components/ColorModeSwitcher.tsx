import { IconButton, ResponsiveValue, Tooltip, useColorMode } from "@chakra-ui/react";
import { DayIcon, NightIcon } from "./Icons";

type IconSwitcherProps = {
	size?: ResponsiveValue<(string & object) | "sm" | "md" | "lg" | "xs"> | undefined,
	showTooltip?: boolean,
}

export const ColorModeSwicther = (props: IconSwitcherProps) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Tooltip
			aria-label="Switch color mode"
			label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
			placement="auto"
			isDisabled={!props.showTooltip}
		>
			<IconButton
				aria-label="Switch color mode"
				onClick={toggleColorMode}
				variant="ghost"
				isRound={true}
				size={props.size}
				icon={colorMode === "light" ? <DayIcon /> : <NightIcon /> }
			/>
		</Tooltip>
	);
};
