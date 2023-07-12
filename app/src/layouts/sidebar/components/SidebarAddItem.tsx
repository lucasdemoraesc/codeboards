import { Clickable } from "@/components/Clickable";
import { PlusIcon } from "@/components/Icons";
import { TooltipWithLegend } from "@/components/TooltipWithLegend";
import { Flex, Text } from "@chakra-ui/react";

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
			<TooltipWithLegend
				label={`Add new ${itemType}`}
				legend="(under construction)"
			>
				<Clickable onClick={onClick}>
					<PlusIcon />
				</Clickable>
			</TooltipWithLegend>
		</Flex>
	);
};
