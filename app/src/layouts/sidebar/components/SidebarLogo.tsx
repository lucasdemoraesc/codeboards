import { CodeboardsLogo } from "@/components/Icons";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export const SidebarLogo = () => {
	return (
		<Flex
			as={NextLink}
			href={"/"}
			alignItems={"center"}
			gap={2}
		>
			<CodeboardsLogo fontSize={"larger"} />
			<Text
				_selection={{ bg: "unset", color: "unset" }}
				fontSize={"xl"}
				fontWeight={"bold"}
				color={useColorModeValue("gray.600", "gray.200")}
			>
				codeboards
			</Text>
		</Flex >
	);
};
