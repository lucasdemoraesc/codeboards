import { Seo } from "@/components/Seo";
import { VStack } from "@chakra-ui/react";

const ProjectsContainer = () => {
	return (
		<VStack
			spacing={4}
			h="100%"
			justifyContent="center"
			backgroundImage="https://cataas.com/cat/gif/says/Under%20construction"
		>
			<Seo title="Projects" />
		</VStack>
	);
};

export default ProjectsContainer;
