import { isTruncated } from "@/services/utils";
import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactElement, useEffect, useRef } from "react";

export const SidebarItem = (props: {
	label: string,
	icon: ReactElement,
	level?: 1 | 2,
	href?: string,
	onClick?: () => void;
}) => {

	const { label, icon, level = 1, href = "#", onClick = () => undefined } = props;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const labelElementRef: any = useRef<HTMLElement>(null);

	useEffect(() => {
		const divElement = labelElementRef.current;
		if (divElement)
			divElement.title = isTruncated(divElement) ? label : "";
	}, [label]);

	return (
		<Link
			as={NextLink}
			href={href}
			display={"flex"}
			alignItems="center"
			gap={2}
			paddingLeft={level === 1 ? 3 : 6}
			paddingRight={3}
			paddingY={1.5}
			borderRadius={"base"}
			transitionProperty={"background-color"}
			transitionDuration={"normal"}
			transitionTimingFunction={"ease-in-out"}
			onClick={onClick}
			_hover={{
				backgroundColor: useColorModeValue("gray.100", "whiteAlpha.200")
			}}
			_active={{
				backgroundColor: useColorModeValue("gray.200", "whiteAlpha.300")
			}}
		>
			{icon}
			<Text
				isTruncated
				ref={labelElementRef}
			>
				{label}
			</Text>
		</Link >
	);
};
