import { ColorModeSwicther } from "@/components/ColorModeSwitcher";
import { Seo } from "@/components/Seo";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { SignInForm } from "./SignInForm";

export const SignInPage = () => {

	return (
		<VStack spacing={4} h="100vh" justifyContent="center">
			<Seo title="Sign In" />
			<Box position="absolute" top="4" right="4">
				<ColorModeSwicther size="lg" showTooltip />
			</Box>
			<Heading>
				Welcome.
			</Heading>
			<Text>
				Sign in and start using <u>for free</u>!
			</Text>
			<SignInForm />
		</VStack>
	);
};
