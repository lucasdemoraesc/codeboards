import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

export const SidebarLogo = () => {
	return (
		<Flex
			height="12"
			alignItems={"center"}
			paddingX={3.5}
			borderBottom="1px"
			borderColor="inherit"
		>
			<Image
				src={useColorModeValue("/images/logo/default-vertical.png", "/images/logo/default-light-vertical.png")}
				width="36"
				alt="Codeboards logo"
			/>
		</Flex>
	);
};
