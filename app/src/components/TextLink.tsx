import { ExternalLinkIcon } from "@/components/Icons";
import { chakra, HStack, TextProps } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

type TextLinkProps = LinkProps & TextProps & { isExternal?: boolean }

export const TextLink = ({
	children,
	href,
	shallow,
	replace,
	scroll,
	prefetch,
	isExternal,
	noOfLines,
	...textProps
}: TextLinkProps) => (
	<Link
		href={href}
		shallow={shallow}
		replace={replace}
		scroll={scroll}
		prefetch={prefetch}
		target={isExternal ? "_blank" : undefined}
	>
		<chakra.span textDecor="underline" display="inline-block" {...textProps}>
			{isExternal ? (
				<HStack spacing={1}>
					<chakra.span noOfLines={noOfLines} maxW="100%">
						{children}
					</chakra.span>
					<ExternalLinkIcon />
				</HStack>
			) : (
				children
			)}
		</chakra.span>
	</Link>
);
