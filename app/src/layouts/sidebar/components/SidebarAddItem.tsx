import { Clickable } from "@/components/Clickable";
import { PlusIcon } from "@/components/Icons";
import { Box, Flex, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";

export const SidebarAddItem = (props: { title: string, itemType: string, onClick: () => void; }) => {
	const { title, itemType, onClick } = props;

	return (
		<Flex
			justifyContent={"space-between"}
			alignItems={"center"}
			paddingLeft={3}
			paddingRight={1}
		>
			<Text fontSize={"xs"}>{title}</Text>
			<Tooltip
				label={<Box><Text>Add new {itemType}</Text><Text textColor={useColorModeValue("gray.400", "gray.500")}>(under construction)</Text></Box>}
			>
				<Clickable onClick={onClick}>
					<PlusIcon />
				</Clickable>
			</Tooltip>
		</Flex>
	);
};
