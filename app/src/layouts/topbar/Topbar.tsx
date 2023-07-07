import { Clickable } from "@/components/Clickable";
import { ColorModeSwicther } from "@/components/ColorModeSwitcher";
import { StarIcon, ThreeDotsIcon } from "@/components/Icons";
import { Badge, Box, HStack, Text, Tooltip, chakra, useColorModeValue } from "@chakra-ui/react";

export const Topbar = () => {
	return (
		<chakra.nav
			display={"flex"}
			minHeight="12"
			paddingX="3.5"
			borderBottom="1px"
			justifyContent="space-between"
			borderColor={useColorModeValue("gray.200", "gray.700")}
		>
			<HStack>
				<Badge colorScheme='blue'>Project</Badge>
				<Text lineHeight={"none"}>Development roadmap</Text>
			</HStack>

			<HStack>
				<Text
					fontSize={"xs"}
					color={"gray.400"}
					fontWeight={"semibold"}
					lineHeight={0}
				>
					Edited jun 22
				</Text>
				<Tooltip
					aria-label="Add to favorites"
					label={<Box><Text>Add to favorites</Text><Text textColor={useColorModeValue("gray.400", "gray.500")}>(under construction)</Text></Box>}
					placement="bottom"
				>
					<Clickable>
						<StarIcon fontSize={"larger"} />
					</Clickable>
				</Tooltip>
				<ColorModeSwicther
					showTooltip
					tooltipPosition="bottom"
					size={"larger"}
				/>
				<Tooltip
					aria-label="More options"
					label={<Box><Text>More options</Text><Text textColor={useColorModeValue("gray.400", "gray.500")}>(under construction)</Text></Box>}
					placement="bottom"
				>
					<Clickable>
						<ThreeDotsIcon fontSize={"larger"} />
					</Clickable>
				</Tooltip>
			</HStack>
		</chakra.nav>
	);
};
