import { Box, Text, Tooltip, TooltipProps, useColorModeValue } from "@chakra-ui/react";

export const TooltipWithLegend = (props: TooltipProps & { legend: string; }) => {

	return (
		<Tooltip
			placement="auto"
			{...props}
			label={
				<Box>
					<Text>{props.label}</Text>
					<Text textColor={useColorModeValue("gray.400", "gray.500")}>
						{props.legend}
					</Text>
				</Box>}
		>
			{props.children}
		</Tooltip>
	);
};
