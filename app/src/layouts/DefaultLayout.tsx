import { useBoards } from "@/services/boards";
import { useProjects } from "@/services/projects";
import { Flex, chakra, useToast } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Topbar } from "./topbar/Topbar";

export default function DefaultLayout(children: ReactElement): ReactNode {

	const toast = useToast();
	const onError = (error: Error) => {
		toast({
			title: "Error",
			description: error.message,
			status: "error",
			duration: 5000,
			isClosable: true
		});
	};
	const { projects, isLoading: isLoadingProjects } = useProjects({
		withBoards: true,
		onError
	});
	const { boards, isLoading: isLoadingBoards } = useBoards({
		onError
	});

	return (
		<Flex>
			<Sidebar
				projects={projects}
				isLoadingProjects={isLoadingProjects}
				boards={boards}
				isLoadingBoards={isLoadingBoards}
			/>
			<Flex
				direction="column"
				height="100vh"
				width="100%"
			>
				<Topbar />
				<chakra.main
					height="100%"
				>
					{children}
				</chakra.main>
			</Flex>
		</Flex>
	);
}
