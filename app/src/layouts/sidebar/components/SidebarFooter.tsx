import { ChevronRightIcon, LogoutIcon } from "@/components/Icons";
import { useUser } from "@/features/account/hooks/useUser";
import {
	Avatar,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Text,
	useColorMode
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export const SidebarFooter = () => {

	const { user, isLoading } = useUser();
	const { colorMode: currentColorMode } = useColorMode();

	return (
		<Menu
			isLazy
			placement="top"
		>
			{({ isOpen }) => (
				<>
					<MenuButton
						height="12"
						paddingX={3.5}
						width="100%"
						borderTop="1px"
						borderColor="inherit"
						cursor={"pointer"}
						transition="background-color .2s ease"
						_hover={{
							backgroundColor: currentColorMode === "light" ? "gray.100" : "whiteAlpha.200"
						}}
						_active={{
							backgroundColor: currentColorMode === "light" ? "gray.200" : "whiteAlpha.300"
						}}
					>
						<HStack
							alignItems={"center"}
							gap={2}
						>
							{isLoading ?
								<>
									<SkeletonCircle></SkeletonCircle>
									<SkeletonText skeletonHeight={3} width={"28"} noOfLines={1}></SkeletonText>
									<Skeleton height={3} width={3} noOfLines={1}></Skeleton>
								</>
								: <>
									<Avatar
										src={user?.image || ""}
										name={user?.name || user?.email || "User"}
										size={"sm"}
									/>
									<Text isTruncated>{user?.name || user?.email || "User options"}</Text>
									<ChevronRightIcon
										transform={isOpen ? "rotate(-90deg)" : ""}
										transition={"transform .2s ease-in-out"}
									/>
								</>
							}
						</HStack>
					</MenuButton>

					<MenuList>
						<MenuItem
							icon={<LogoutIcon fontSize={"md"} />}
							color={"orange.500"}
							onClick={() => signOut()}
						>
							Log out
						</MenuItem>
					</MenuList>
				</>
			)}
		</Menu>
	);
};
