import { Project } from ".prisma/client";
import useSWR from "swr";
import { fetcher, sendRequest } from "./utils";

type ProjectOmited = Omit<Project, "createdAt" | "updatedAt" | "ownerId">;

export const useProjects = ({ onError }: { onError: (error: Error) => void; }) => {

	const { data, error, mutate } = useSWR<{ projects: Project[]; }, Error>("/api/projects", fetcher);
	if (error) onError(error);

	return {
		projects: data?.projects,
		isLoading: !error && !data,
		mutate
	};
};

export const useProjectContent = ({
	projectId,
	onError
}: {
	projectId: string;
	onError: (error: Error) => void;
}) => {

	const { data, error, mutate } = useSWR<{ project: Project; }, Error>(`api/projects/${projectId}`, fetcher);
	if (error) onError(error);

	return {
		project: data?.project,
		isLoading: !error && !data,
		mutate
	};
};


export const createProject = async (project: ProjectOmited) => {
	return sendRequest<Project>({
		url: "/api/projects",
		method: "POST",
		body: project
	});
};

export const updateProject = async (id: string, project: Partial<ProjectOmited>) => {
	return sendRequest({
		url: `/api/projects/${id}`,
		method: "PUT",
		body: project
	});
};

export const deleteProject = async (id: string) => {
	return sendRequest({
		url: `/api/projects/${id}`,
		method: "DELETE"
	});
};
