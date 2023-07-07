import { Board } from ".prisma/client";
import { KanbanBoardIcon } from "@/components/Icons";
import { SidebarAddItem } from "./components/SidebarAddItem";
import { SidebarItem } from "./components/SidebarItem";
import { SidebarItemsContainer } from "./components/SidebarItemsContainer";
import { SidebarItemsEmpty } from "./components/SidebarItemsEmpty";
import { SidebarItemsSkeleton } from "./components/SidebarItemsSkeleton";

export const SidebarBoards = ({
	boards,
	isLoading
}: {
	boards?: Board[];
	isLoading: boolean;
}) => {

	return (
		<SidebarItemsContainer>
			<SidebarItemsSkeleton isLoading={isLoading}>
				<SidebarAddItem
					title="Boards"
					itemType="board"
					onClick={() => undefined}
				></SidebarAddItem>

				{boards && boards.length > 0 ? boards?.map((board) => (
					<SidebarItem
						key={board.id}
						href={`/boards/${board.id}`}
						label={board.name}
						icon={<KanbanBoardIcon />}
					></SidebarItem>
				)) : <SidebarItemsEmpty itemType="boards" onAdd={() => undefined} />}
			</SidebarItemsSkeleton>
		</SidebarItemsContainer>
	);
};
