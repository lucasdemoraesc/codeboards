import { Board, Project } from ".prisma/client";
import { OverviewIcon, StarIcon } from "@/components/Icons";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import { SidebarBoards } from "./SidebarBoards";
import { SidebarProjects } from "./SidebarProjects";
import { SidebarFooter } from "./components/SidebarFooter";
import { SidebarItem } from "./components/SidebarItem";
import { SidebarItensContainer } from "./components/SidebarItensContainer";
import { SidebarLogo } from "./components/SidebarLogo";

export const Sidebar = ({
	projects,
	boards,
	isLoadingProjects,
	isLoadingBoards
}: {
	projects?: Project[],
	isLoadingProjects: boolean;
	boards?: Board[],
	isLoadingBoards: boolean;
}) => {

	return (
		<chakra.aside
			width="241px"
			minWidth="241px"
			height="100vh"
			display="inherit"
			flexDirection="column"
			alignItems="stretch"
			borderRight="1px"
			borderColor={useColorModeValue("gray.200", "gray.700")}
			userSelect={"none"}
		>
			<SidebarLogo />

			<SidebarItensContainer>
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
			</SidebarItensContainer>

			<SidebarProjects
				projects={projects}
				isLoading={isLoadingProjects}
			/>

			<SidebarBoards
				boards={boards}
				isLoading={isLoadingBoards}
			/>

			<SidebarFooter />
		</chakra.aside>
	);
};
