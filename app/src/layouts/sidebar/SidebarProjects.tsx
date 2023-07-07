import { Project } from ".prisma/client";
import { Clickable } from "@/components/Clickable";
import { AngleRightIcon, DotIcon } from "@/components/Icons";
import { Box } from "@chakra-ui/react";
import { Board } from "@codeboards/prisma";
import React from "react";
import { SidebarAddItem } from "./components/SidebarAddItem";
import { SidebarItem } from "./components/SidebarItem";
import { SidebarItensContainer } from "./components/SidebarItensContainer";

type ProjectWithBoards = Project & {
	boards?: Board[];
};

export const SidebarProjects = ({
	projects,
	isLoading
}: {
	projects?: ProjectWithBoards[];
	isLoading: boolean;
}) => {

	return (
		<SidebarItensContainer>
			<SidebarAddItem
				title="Projects"
				itemType="project"
				onClick={() => undefined}
			></SidebarAddItem>

			{isLoading ? (
				<Box paddingY={1.5} paddingX={3}>Loading...</Box>
			) : (
				projects?.map((project) => (
					<React.Fragment key={project.id}>
						<SidebarItem
							key={project.id}
							href={`/projects/${project.id}`}
							label={project.name}
							icon={
								<Clickable
									marginLeft={"-1"}
									onClick={() => undefined}
								>
									<AngleRightIcon />
								</Clickable>
							}
						></SidebarItem>

						{project.boards &&
							project.boards.map((board) => (
								<SidebarItem
									key={board.id}
									href={`/boards/${board.id}`}
									label={board.name}
									icon={<DotIcon fontSize={".5rem"} />}
									level={2}
								></SidebarItem>)
							)}
					</React.Fragment>
				))
			)}
		</SidebarItensContainer>
	);
};
