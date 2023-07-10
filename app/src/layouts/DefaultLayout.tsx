import useDeviceDetect from "@/hooks/useDeviceDetect";
import { useBoards } from "@/services/boards";
import { useProjects } from "@/services/projects";
import { booleanFromString, booleanToString } from "@/services/utils";
import { Flex, chakra, useToast } from "@chakra-ui/react";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Topbar } from "./topbar/Topbar";

const localStorageSidebarClosedKey = "sidebarClosed";

export default function DefaultLayout(children: ReactElement): ReactNode {

	const sidebarWidth = 241;
	const [sidebarLeftPosition, setSidebarLeftPosition] = useState(0);
	const [isSidebarClosed, _setIsSidebarClosed] = useState<boolean | undefined>();
	const toast = useToast();

	const setIsSidebarClosed = (value: boolean) => {
		_setIsSidebarClosed(value);
		setSidebarLeftPosition(value ? sidebarWidth * -1 : 0);
	};

	useDeviceDetect((isMobile) => {
		if (isMobile && !isSidebarClosed)
			setIsSidebarClosed(true);
	});

	useEffect(() => {
		const _isClosed = booleanFromString(localStorage.getItem(localStorageSidebarClosedKey));
		setIsSidebarClosed(_isClosed);
	}, []);

	const toggleSidebar = () => {
		localStorage.setItem(localStorageSidebarClosedKey, booleanToString(!isSidebarClosed));
		setIsSidebarClosed(!isSidebarClosed);
	};

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

	// Hook para remover o loader global após o carregamento dos dados
	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		const loaderContainer = document.getElementById("globalLoader");
	// 		if (loaderContainer && !isLoadingBoards && !isLoadingProjects) {
	// 			const loader = document.getElementById("loader");
	// 			if (loader) {
	// 				loader.style.filter = "opacity(0)";
	// 				setTimeout(() => {
	// 					loaderContainer.remove();
	// 				}, 300);
	// 			}
	// 		}
	// 	}
	// }, [isLoadingBoards, isLoadingProjects]);

	return (
		<Flex>
			<Sidebar
				projects={projects}
				isLoadingProjects={isLoadingProjects}
				boards={boards}
				isLoadingBoards={isLoadingBoards}
				width={sidebarWidth}
				leftPosition={sidebarLeftPosition}
				setLeftPosition={setSidebarLeftPosition}
				isClosed={isSidebarClosed}
				onToggle={toggleSidebar}
			/>
			<Flex
				direction="column"
				height="100vh"
				width="100%"
			>
				<Topbar
					showSidebarToggleButton={isSidebarClosed}
					onToggleSidebar={toggleSidebar}
					onHoverToggleSidebarButton={() => setSidebarLeftPosition(0)}
					onUnhoverToggleSidebarButton={() => setSidebarLeftPosition(sidebarWidth * -1)}
				/>
				<chakra.main
					height="100%"
					overflow={"auto"}
				>
					{children}
				</chakra.main>
			</Flex>
		</Flex>
	);
}
