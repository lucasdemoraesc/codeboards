import { Board } from ".prisma/client";
import { KanbanBoardIcon } from "@/components/Icons";
import { Box } from "@chakra-ui/react";
import { SidebarAddItem } from "./components/SidebarAddItem";
import { SidebarItem } from "./components/SidebarItem";
import { SidebarItensContainer } from "./components/SidebarItensContainer";

export const SidebarBoards = ({
	boards,
	isLoading
}: {
	boards?: Board[];
	isLoading: boolean;
}) => {
	return (
		<SidebarItensContainer>
			<SidebarAddItem
				title="Boards"
				itemType="board"
				onClick={() => undefined}
			></SidebarAddItem>

			{isLoading ? (
				<Box paddingY={1.5} paddingX={3}>Loading...</Box>
			) : (
				boards?.map((board) => (
					<SidebarItem
						key={board.id}
						href={`/boards/${board.id}`}
						label={board.name}
						icon={<KanbanBoardIcon />}
					></SidebarItem>
				))
			)}
		</SidebarItensContainer>
	);
};
