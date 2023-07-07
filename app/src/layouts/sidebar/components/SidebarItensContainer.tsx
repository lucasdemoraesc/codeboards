import { Box, SpaceProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const SidebarItensContainer = (props: PropsWithChildren<{
	paddingX?: SpaceProps["padding"],
	paddingY?: SpaceProps["padding"],
}>) => {
	const { children, paddingX = 1.5, paddingY = 3 } = props;

	return (
		<Box
			paddingX={paddingX}
			paddingY={paddingY}
			flexDirection={"column"}
		>
			{children}
		</Box>
	);
};
