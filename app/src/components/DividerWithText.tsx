import { Divider, Flex, FlexProps, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";

export const DividerWithText = (props: FlexProps) => {
	const { children, ...flexProps } = props;
	return (
		<Flex align="center" color="gray.300" {...flexProps}>
			<Divider borderColor="currentcolor" />
			<Text
				as="span"
				paddingX="3"
				color={useColorModeValue("gray.600", "gray.400")}
				fontWeight="medium"
			>
				{children}
			</Text>
			<Divider borderColor="currentcolor" />
		</Flex>
	);
};
