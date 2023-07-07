import { AngleRightIcon, LogoutIcon } from "@/components/Icons";
import { useUser } from "@/services/user";
import { Avatar, HStack, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export const SidebarFooter = () => {

	const { user } = useUser();

	return (
		<Menu
			isLazy
			placement="top"
		>
			<MenuButton
				height="12"
				paddingX={3.5}
				borderTop="1px"
				borderColor="inherit"
				marginTop={"auto"}
				cursor={"pointer"}
				transition="background-color .2s ease"
				_hover={{
					backgroundColor: useColorModeValue("gray.100", "whiteAlpha.200")
				}}
				_active={{
					backgroundColor: useColorModeValue("gray.200", "whiteAlpha.300")
				}}
			>
				<HStack
					alignItems={"center"}
					gap={2}
				>
					<Avatar
						src={user?.image || ""}
						name={user?.name || user?.email || "User"}
						size={"sm"}
					/>
					<Text
						isTruncated
					>
						{user?.name || user?.email || "User options"}
					</Text>
					<AngleRightIcon />
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
		</Menu>
	);
};