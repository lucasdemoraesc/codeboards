import { Clickable } from "@/components/Clickable";
import { ColorModeSwicther } from "@/components/ColorModeSwitcher";
import { DoubleChevronRightIcon, HamburgerMenuIcon, StarIcon, ThreeDotsIcon } from "@/components/Icons";
import { TooltipWithLegend } from "@/components/TooltipWithLegend";
import { Badge, HStack, Text, chakra, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { CloseSidebarTooltip } from "../sidebar/components/CloseSidebarTooltip";

type TopbarProps = {
	showSidebarToggleButton?: boolean;
	sidebarHovered?: boolean;
	onToggleSidebar?: () => void;
	onHoverToggleSidebarButton?: () => void;
	onUnhoverToggleSidebarButton?: () => void;
};

export const Topbar = (props: TopbarProps) => {

	const {
		showSidebarToggleButton,
		sidebarHovered,
		onToggleSidebar,
		onHoverToggleSidebarButton,
		onUnhoverToggleSidebarButton
	} = props;
	const [hamburgerMenuHovered, setHamburgerMenuHovered] = useState(false);

	return (
		<chakra.nav
			display={"flex"}
			minHeight="12"
			paddingX="3.5"
			borderBottom="1px"
			justifyContent="space-between"
			borderColor={useColorModeValue("gray.200", "gray.700")}
		>
			{showSidebarToggleButton &&
				<chakra.div
					position={"fixed"}
					top={0}
					left={4}
					width={"7"}
					height={16}
					onMouseOut={() => onUnhoverToggleSidebarButton && onUnhoverToggleSidebarButton()}
				/>
			}
			<HStack>
				{showSidebarToggleButton &&
					<CloseSidebarTooltip closed={showSidebarToggleButton}>
						<Clickable
							onMouseOver={() => {
								setHamburgerMenuHovered(true);
								onHoverToggleSidebarButton && onHoverToggleSidebarButton();
							}}
							onMouseOut={() => setHamburgerMenuHovered(false)}
							onClick={() => {
								if (onToggleSidebar) {
									onToggleSidebar();
									setHamburgerMenuHovered(false);
								}
							}}
						>
							<HamburgerMenuIcon
								fontSize={"xl"}
								opacity={!hamburgerMenuHovered && !sidebarHovered ? 1 : 0}
								transitionProperty={"opacity"}
								transitionDuration={"normal"}
								transitionTimingFunction={"ease-in-out"}
							/>
							<DoubleChevronRightIcon
								fontSize={"xl"}
								marginLeft={"-5"}
								opacity={hamburgerMenuHovered || sidebarHovered ? 1 : 0}
								transitionProperty={"opacity"}
								transitionDuration={"normal"}
								transitionTimingFunction={"ease-in-out"}
							/>
						</Clickable>
					</CloseSidebarTooltip>
				}
				<Badge colorScheme='blue'>Project</Badge>
				<Text>Development roadmap</Text>
			</HStack>

			<HStack>
				<Text
					fontSize={"xs"}
					color={"gray.400"}
					fontWeight={"semibold"}
				>
					Edited jun 22
				</Text>
				<TooltipWithLegend
					label="Add to favorites"
					legend="(under construction)"
				>
					<Clickable>
						<StarIcon fontSize={"larger"} />
					</Clickable>
				</TooltipWithLegend>
				<ColorModeSwicther
					showTooltip
					tooltipPosition="bottom"
					size={"larger"}
				/>
				<TooltipWithLegend
					label="More options"
					legend="(under construction)"
				>
					<Clickable>
						<ThreeDotsIcon fontSize={"larger"} />
					</Clickable>
				</TooltipWithLegend>
			</HStack>
		</chakra.nav>
	);
};
