import { User } from "@codeboards/prisma";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";

export const userContext = createContext<{
	user?: User;
	isLoading: boolean;
	// eslint-disable-next-line indent
}>({ isLoading: true });

export const UserProvider = ({ children }: { children: ReactNode; }) => {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [user, setUser] = useState<User | undefined>();

	useEffect(() => {
		if (user || !session)
			return;

		const parsedUser = session.user as User;
		setUser(parsedUser);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session]);

	useEffect(() => {
		if (!router.isReady || status === "loading")
			return;

		if (!user && status === "unauthenticated" && !isSigningIn())
			router.push({
				pathname: "/signin",
				query:
					router.pathname !== "/"
						? {
							callbackUrl: router.asPath
						}
						: undefined
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, router]);

	const isSigningIn = () => router.pathname.includes("/signin");

	return (
		<userContext.Provider
			value={{
				user,
				isLoading: status === "loading" || !user
			}}
		>
			{children}
		</userContext.Provider>
	);
};
