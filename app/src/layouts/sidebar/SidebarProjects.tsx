import { Project } from ".prisma/client";
import { Clickable } from "@/components/Clickable";
import { ChevronRightIcon, DotIcon } from "@/components/Icons";
import { Board } from "@codeboards/prisma";
import React from "react";
import { SidebarAddItem } from "./components/SidebarAddItem";
import { SidebarItem } from "./components/SidebarItem";
import { SidebarItemsEmpty } from "./components/SidebarItemsEmpty";
import { SidebarItemsSkeleton } from "./components/SidebarItemsSkeleton";

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
		<>
			<SidebarItemsSkeleton numberOfItems={2} isLoading={isLoading}>
				<SidebarAddItem
					title="Projects"
					itemType="project"
					onClick={() => undefined}
				></SidebarAddItem>

				{projects && projects.length > 0 ? projects?.map((project) => (
					<React.Fragment key={project.id}>
						<SidebarItem
							key={project.id}
							href={`/projects/${project.id}`}
							label={project.name}
							icon={
								<Clickable
									onClick={() => undefined}
								>
									<ChevronRightIcon />
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
				)) : <SidebarItemsEmpty itemType="projects" onAdd={() => undefined} />}
			</SidebarItemsSkeleton>
		</>
	);
};
