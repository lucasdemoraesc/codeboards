import { Seo } from "@/components/Seo";
import { Heading, Image, Spinner, VStack } from "@chakra-ui/react";

const UnderConstructionContainer = (props: { title: string; }) => {

	const { title } = props;
	return (
		<VStack
			spacing={12}
			h="100%"
			justifyContent="center"
		>
			<Seo title={title} />
			<Image
				draggable={false}
				_selection={{ backgroundColor: "unset" }}
				src={"https://cataas.com/cat/gif/says/Under%20development"}
				fallback={<Spinner size={"xl"} />}
				alt={title}
				borderRadius={"md"}
				width={"96"}
			></Image>
			<Heading>{`⏳️ ${title} is under development`}</Heading>
		</VStack>
	);
};

export default UnderConstructionContainer;
