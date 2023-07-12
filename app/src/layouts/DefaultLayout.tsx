import useDeviceDetect from "@/hooks/useDeviceDetect";
import { useBoards } from "@/services/boards";
import { useProjects } from "@/services/projects";
import { booleanFromString, booleanToString } from "@/services/utils";
import { Flex, chakra, useToast } from "@chakra-ui/react";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Topbar } from "./topbar/Topbar";

export const localStorageSidebarClosedKey = "sidebarClosed";

export default function DefaultLayout(children: ReactElement): ReactNode {

	const sidebarWidth = 241;
	const [sidebarLeftPosition, setSidebarLeftPosition] = useState(0);
	const [isSidebarClosed, _setIsSidebarClosed] = useState<boolean | undefined>();
	const toast = useToast();

	const setIsSidebarClosed = (_isSidebarClosed: boolean) => {
		_setIsSidebarClosed(_isSidebarClosed);
		setSidebarLeftPosition(_isSidebarClosed ? sidebarWidth * -1 : 0);
	};

	useDeviceDetect((isMobile) => {
		if (isMobile && !isSidebarClosed)
			setIsSidebarClosed(true);
	});

	useEffect(() => {
		const _isClosed = booleanFromString(localStorage.getItem(localStorageSidebarClosedKey));
		setIsSidebarClosed(_isClosed);
	}, []);

	const toggleSidebar = (waitToClose = false) => {
		const _isSidebarClosed = !isSidebarClosed;
		localStorage.setItem(localStorageSidebarClosedKey, booleanToString(_isSidebarClosed));
		if (!waitToClose)
			setIsSidebarClosed(_isSidebarClosed);
		else {
			_setIsSidebarClosed(_isSidebarClosed);
			window.addEventListener("mousemove", () => {
				if (booleanFromString(localStorage.getItem(localStorageSidebarClosedKey)))
					setSidebarLeftPosition(sidebarWidth * -1);
			}, { once: true });
		}
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
		(typeof isSidebarClosed === "undefined" ? <></> :
			<>
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
						width={"100%"}
						height="100vh"
						marginLeft={isSidebarClosed ? (sidebarWidth * -1) + "px" : 0}
						direction="column"
						transitionProperty={"margin-left"}
						transitionDuration={"normal"}
						transitionTimingFunction={"ease-in-out"}
					>
						<Topbar
							showSidebarToggleButton={isSidebarClosed}
							onToggleSidebar={toggleSidebar}
							onHoverToggleSidebarButton={() => setSidebarLeftPosition(0)}
							onUnhoverToggleSidebarButton={() => setSidebarLeftPosition(sidebarWidth * -1)}
							sidebarHovered={sidebarLeftPosition === 0}
						/>
						<chakra.main
							height="100%"
							overflow={"auto"}
						>
							{children}
						</chakra.main>
					</Flex>
				</Flex>
			</>
		)
	);
}
