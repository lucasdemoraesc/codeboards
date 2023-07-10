import { Board, Project } from ".prisma/client";
import { Clickable } from "@/components/Clickable";
import { DoubleChevronLeftIcon, OverviewIcon, StarIcon } from "@/components/Icons";
import { Flex, Tooltip, chakra, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { SidebarBoards } from "./SidebarBoards";
import { SidebarProjects } from "./SidebarProjects";
import { SidebarFooter } from "./components/SidebarFooter";
import { SidebarItem } from "./components/SidebarItem";
import { SidebarItemsContainer } from "./components/SidebarItemsContainer";
import { SidebarLogo } from "./components/SidebarLogo";

export const Sidebar = ({
	projects,
	boards,
	isLoadingProjects,
	isLoadingBoards,
	width,
	leftPosition,
	setLeftPosition,
	isClosed,
	onToggle
}: {
	projects?: Project[];
	isLoadingProjects: boolean;
	boards?: Board[];
	isLoadingBoards: boolean;
	width: number;
	leftPosition: number;
	setLeftPosition: (value: number) => void;
	isClosed: boolean | undefined;
	onToggle: () => void;
}) => {

	const [showCollapseButton, setShowCollapseButton] = useState(false);
	const { colorMode: currentColorMode } = useColorMode();

	const sidebarWidthInPx = width + "px";
	const leftPositionInPx = leftPosition + "px";

	return (
		(typeof isClosed === "undefined" ? <></> :
			<>
				<chakra.aside
					position={isClosed ? "fixed" : "relative"}
					display="inherit"
					width={sidebarWidthInPx}
					minWidth={sidebarWidthInPx}
					height={isClosed ? "max-content" : "100vh"}
					marginTop={isClosed ? "16" : "unset"}
					left={leftPositionInPx}
					overflow={"hidden"}
					flexDirection="column"
					alignItems="stretch"
					borderRight="1px"
					borderY={isClosed ? "1px" : "0px"}
					borderColor={currentColorMode === "light" ? "gray.200" : "gray.700"}
					borderEndEndRadius={isClosed ? "md" : "unset"}
					boxShadow={isClosed ? "2xl" : "unset"}
					backgroundColor={currentColorMode === "light" ? "white" : "gray.900"}
					userSelect={"none"}
					transition={isClosed ?
						`
							margin-top .2s ease-in-out,
							height .2s ease-in-out,
							left .2s .15s ease-in-out,
							width .2s ease-in-out
						`
						:
						`
							left .2s ease-in-out,
							margin-top .2s ease-in-out
						`
					}
					onMouseEnter={() => {
						setShowCollapseButton(true);
						setLeftPosition(0);
					}}
					onMouseLeave={() => {
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
							<Tooltip label={"Close sidebar"}>
								<Clickable>
									<DoubleChevronLeftIcon
										fontSize={"2xl"}
										strokeWidth={1.5}
										opacity={showCollapseButton ? 1 : 0}
										transition={"opacity .2s ease-in-out"}
										onClick={onToggle}
									/>
								</Clickable>
							</Tooltip>
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

					<chakra.div marginTop={isClosed ? 3 : "auto"}>
						<SidebarFooter />
					</chakra.div>

					{isClosed &&
						<Flex
							position={"fixed"}
							width={"4"}
							height={"100vh"}
							top={0}
							left={0}
							onDoubleClick={onToggle}
							onMouseEnter={() => setLeftPosition(0)}
						>
						</Flex>
					}
				</chakra.aside>
			</>
		)
	);
};
