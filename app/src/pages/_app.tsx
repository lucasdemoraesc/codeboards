import "@/assets/styles/routerProgressBar.css";
import Layout from "@/components/Layout";
import { useRouterProgressBar } from "@/hooks/useRouterProgressBar";
import { customTheme } from "@/libs/customTheme";
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

	const getLayout = Component.getLayout ?? Layout;
	useRouterProgressBar();

	return getLayout(
		<ChakraProvider theme={customTheme}>
			<SessionProvider>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	);
}

export default App;
