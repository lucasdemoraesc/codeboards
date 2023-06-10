import { ColorModeSwicther } from "@/components/ColorModeSwitcher";
import { Seo } from "@/components/Seo";
import withAuth from "@/hooks/withAuth";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Image, Text, VStack } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useState } from "react";

const ProjectsContainer = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => setLoading(false), 5000);

	const handleSignOut = () => {
		setLoading(true);
		return signOut();
	};

	return (
		<VStack
			spacing={4}
			h="100vh"
			justifyContent="center"
			backgroundImage="https://cataas.com/cat/gif/says/Under%20construction"
		>
			<Seo title="Projects" />
			<Card
				align="center"
				textAlign="center"
				shadow="2xl"
				maxW="240px"
			>
				<CardHeader>
					<Box position="absolute" top="0" right="0">
						<ColorModeSwicther />
					</Box>
					<Image
						borderRadius="full"
						boxSize="120px"
						src="https://cataas.com/cat"
						alt="Dan Abramov"
					/>
				</CardHeader>
				<CardBody>
					<Text data-testid="authenticated">Hello!</Text>
				</CardBody>
				<CardFooter>
					<Button
						onClick={handleSignOut}
						isLoading={loading}
						variant="outline"
					>
						Sign out
					</Button>
				</CardFooter>
			</Card>
		</VStack>
	);
};

export default withAuth(ProjectsContainer);
