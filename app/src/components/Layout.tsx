import { ReactElement, ReactNode } from "react";
import { Sidebar } from "./layout/Sidebar";
import { Topbar } from "./layout/Topbar";

export default function Layout(children: ReactElement): ReactNode {
	return (
		<>
			<Sidebar />
			<Topbar />
			<main>
				{children}
			</main>
		</>
	);
}
