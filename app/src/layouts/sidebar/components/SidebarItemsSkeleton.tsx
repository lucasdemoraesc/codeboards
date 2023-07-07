import { HStack, Skeleton, Stack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const SidebarItemsSkeleton = (props: PropsWithChildren<{ numberOfItems?: number, isLoading?: boolean; }>) => {
	const { numberOfItems, isLoading, children } = props;

	if (isLoading) {
		const skeletonItems = Array.from({ length: numberOfItems || 1 }, (_, index) => (
			<HStack justifyContent="space-between" key={index}>
				<Skeleton height={7} width={7} rounded="md" />
				<Skeleton height={5} width="100%" rounded="lg" />
			</HStack>
		));

		return (
			<Stack spacing={3} paddingX={3}>
				<Skeleton height={5} width="40%" rounded="lg" />
				{skeletonItems}
			</Stack>
		);
	}

	return <>{children}</>;
};
