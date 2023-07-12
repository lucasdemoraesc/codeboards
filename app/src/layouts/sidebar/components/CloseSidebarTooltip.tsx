import { TooltipWithLegend } from "@/components/TooltipWithLegend";
import { PropsWithChildren } from "react";

export const CloseSidebarTooltip = (props: PropsWithChildren & { closed: boolean; }) => {

	const label = props.closed ? "Lock sidebar open" : "Close sidebar";

	return (
		<TooltipWithLegend
			label={label}
			legend={"ctrl + \\"}
		>
			{props.children}
		</TooltipWithLegend>
	);
};
