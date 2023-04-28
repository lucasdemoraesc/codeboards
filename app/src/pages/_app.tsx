import "@/assets/styles/routerProgressBar.css";
import { useRouterProgressBar } from "@/hooks/useRouterProgressBar";
import { customTheme } from "@/libs/customTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
	useRouterProgressBar();

	return (
		<ChakraProvider theme={customTheme}>
			<SessionProvider>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	);
}

export default App;
