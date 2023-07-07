import { Box, Text, chakra, useColorMode } from "@chakra-ui/react";

export const SidebarItemsEmpty = (prop: { itemType: string, onAdd: () => void; }) => {

	const { itemType, onAdd } = prop;
	const { colorMode: currentColorMode } = useColorMode();

	return (
		<Box
			paddingX={3}
			paddingY={1.5}>
			<Text
				color={currentColorMode === "light" ? "gray.400" : "gray.500"}
				fontSize={14}>
				No {itemType} yet, <chakra.u cursor={"pointer"} onClick={onAdd}>add a new</chakra.u>
			</Text>
		</Box>
	);
};
