import "@/assets/styles/routerProgressBar.css";
import { useRouterProgressBar } from "@/hooks/useRouterProgressBar";
import DefaultLayout from "@/layouts/DefaultLayout";
import { customTheme } from "@/libs/customTheme";
import { UserProvider } from "@/providers/UserProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {

	const getLayout = Component.getLayout ?? DefaultLayout;
	useRouterProgressBar();

	return (
		<ChakraProvider theme={customTheme}>
			<SessionProvider session={pageProps.session}>
				<UserProvider>
					{getLayout(<Component {...pageProps} />)}
				</UserProvider>
			</SessionProvider>
		</ChakraProvider>
	);
}

export default App;
