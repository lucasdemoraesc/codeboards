import { Center, CenterProps, useColorModeValue } from "@chakra-ui/react";
import React, { ForwardedRef, PropsWithChildren } from "react";

// eslint-disable-next-line react/display-name
export const Clickable = React.forwardRef((
	props: PropsWithChildren<CenterProps & { onClick?: () => void; }>,
	ref: ForwardedRef<unknown>) => (

	<Center
		cursor={"pointer"}
		ref={ref}
		{...props}
		onClick={(e) => {
			e.stopPropagation();
			e.preventDefault();
			props.onClick?.call(this);
		}}
		padding={"1"}
		borderRadius={"md"}
		transition="background-color .2s ease"
		_hover={{
			backgroundColor: useColorModeValue("gray.200", "whiteAlpha.300")
		}}
		_active={{
			backgroundColor: useColorModeValue("gray.300", "whiteAlpha.400")
		}}
	>
		{props.children}
	</Center>
));
