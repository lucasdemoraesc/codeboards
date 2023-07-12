import { Board, Project } from ".prisma/client";
import { Clickable } from "@/components/Clickable";
import {
	DoubleChevronLeftIcon,
	OverviewIcon,
	StarIcon
} from "@/components/Icons";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { Flex, chakra, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { SidebarBoards } from "./SidebarBoards";
import { SidebarProjects } from "./SidebarProjects";
import { CloseSidebarTooltip } from "./components/CloseSidebarTooltip";
import { SidebarFooter } from "./components/SidebarFooter";
import { SidebarItem } from "./components/SidebarItem";
import { SidebarItemsContainer } from "./components/SidebarItemsContainer";
import { SidebarLogo } from "./components/SidebarLogo";

type SidebarProps = {
	projects?: Project[];
	isLoadingProjects: boolean;
	boards?: Board[];
	isLoadingBoards: boolean;
	isClosed: boolean | undefined;
	width: number;
	leftPosition: number;
	setLeftPosition: (value: number) => void;
	onToggle: (waitToClose?: boolean) => void;
};

export const Sidebar = (props: SidebarProps) => {

	const {
		projects,
		isLoadingProjects,
		boards,
		isLoadingBoards,
		isClosed,
		width,
		leftPosition,
		setLeftPosition,
		onToggle
	} = props;

	useKeyboardShortcut(["ctrl", "\\"], onToggle);
	const [showCollapseButton, setShowCollapseButton] = useState(false);

	const sidebarWidthInPx = width + "px";
	const leftPositionInPx = leftPosition + "px";

	return (
		<chakra.aside
			position={"relative"}
			display="inherit"
			width={sidebarWidthInPx}
			minWidth={sidebarWidthInPx}
			height={isClosed ? "fit-content" : "100vh"}
			maxHeight={isClosed ? "88vh" : "100vh"}
			marginTop={isClosed ? "16" : "unset"}
			left={leftPositionInPx}
			overflow={"hidden"}
			flexDirection="column"
			alignItems="stretch"
			borderRight="1px"
			borderY={isClosed ? "1px" : "0px"}
			borderColor={useColorModeValue("gray.200", "gray.700")}
			borderBottomEndRadius={isClosed ? "md" : "unset"}
			borderTopEndRadius={isClosed ? "md" : "unset"}
			boxShadow={isClosed && leftPosition === 0 ? "2xl" : "unset"}
			backgroundColor={useColorModeValue("chakra-body-bg._light", "chakra-body-bg._dark")}
			userSelect={"none"}
			transition={isClosed ?
				`
				margin-top var(--chakra-transition-duration-normal) var(--chakra-transition-easing-ease-in-out),
				left var(--chakra-transition-duration-normal) .05s var(--chakra-transition-easing-ease-in-out),
				box-shadow var(--chakra-transition-duration-normal) ${leftPosition === 0 ? "" : "var(--chakra-transition-duration-normal)"} var(--chakra-transition-easing-ease-in-out)
				`
				:
				`
				left var(--chakra-transition-duration-normal) var(--chakra-transition-easing-ease-in-out),
				margin-top var(--chakra-transition-duration-normal) .05s var(--chakra-transition-easing-ease-in-out)
				`
			}
			onMouseOver={() => {
				setShowCollapseButton(true);
				setLeftPosition(0);
			}}
			onMouseOut={() => {
				if (!isClosed)
					setShowCollapseButton(false);
				else
					setLeftPosition(width * -1);
			}}
		>
			{!isClosed &&
				<Flex
					alignItems={"center"}
					justifyContent={"space-between"}
					minHeight="12"
					paddingX={3.5}
					borderBottom="1px"
					borderColor="inherit"
					overflow={"visible"}
				>
					<SidebarLogo />
					<CloseSidebarTooltip closed={!!isClosed}>
						<Clickable>
							<DoubleChevronLeftIcon
								fontSize={"2xl"}
								strokeWidth={1.5}
								opacity={showCollapseButton ? 1 : 0}
								transitionProperty={"opacity"}
								transitionDuration={"normal"}
								transitionTimingFunction={"ease-in-out"}
								onClick={() => onToggle(true)}
							/>
						</Clickable>
					</CloseSidebarTooltip>
				</Flex>
			}

			<SidebarItemsContainer>
				<SidebarItem
					href="/"
					label="Overview"
					icon={<OverviewIcon />}
				></SidebarItem>
				<SidebarItem
					href="/favorites"
					label="Favorites"
					icon={<StarIcon />}
				></SidebarItem>
			</SidebarItemsContainer>

			<chakra.div overflow={"auto"}>
				<SidebarItemsContainer>
					<SidebarProjects
						projects={projects}
						isLoading={isLoadingProjects}
					/>
				</SidebarItemsContainer>

				<SidebarItemsContainer>
					<SidebarBoards
						boards={boards}
						isLoading={isLoadingBoards}
					/>
				</SidebarItemsContainer>
			</chakra.div>

			<chakra.div
				marginTop={"auto"}
				paddingTop={3}
			>
				<SidebarFooter />
			</chakra.div>

			{isClosed &&
				<Flex
					position={"fixed"}
					width={"4"}
					height={"100vh"}
					top={0}
					left={0}
					onDoubleClick={() => onToggle()}
					onMouseOver={() => setLeftPosition(0)}
				>
				</Flex>
			}
		</chakra.aside>
	);
};
