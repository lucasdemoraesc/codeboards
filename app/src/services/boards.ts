import { Board } from ".prisma/client";
import useSWR from "swr";
import { fetcher, sendRequest } from "./utils";

type BoardOmited = Omit<Board, "createdAt" | "updatedAt" | "ownerId">;

export const useBoards = ({
	projectId,
	onError
}: {
	projectId?: string,
	onError: (error: Error) => void;
}) => {
	const params = new URLSearchParams(projectId ? { projectId: projectId.toString() } : undefined);
	const { data, error, mutate } = useSWR<{ boards: Board[]; }, Error>(`/api/boards?${params}`, fetcher);
	if (error) onError(error);
	return {
		boards: data?.boards,
		isLoading: !error && !data,
		mutate
	};
};

export const useBoardContent = ({
	boardId,
	onError
}: {
	boardId: string,
	onError: (error: Error) => void;
}) => {

	const { data, error, mutate } = useSWR<{ board: Board; }, Error>(`/api/boards/${boardId}`, fetcher);
	if (error) onError(error);

	return {
		board: data?.board,
		isLoading: !error && !data,
		mutate
	};
};


export const createBoard = async (board: BoardOmited) => {
	return sendRequest<Board>({
		url: "/api/boards",
		method: "POST",
		body: board
	});
};

export const updateBoard = async (id: string, board: Partial<BoardOmited>) => {
	return sendRequest({
		url: `/api/boards/${id}`,
		method: "PUT",
		body: board
	});
};

export const deleteBoard = async (id: string) => {
	return sendRequest({
		url: `/api/boards/${id}`,
		method: "DELETE"
	});
};
