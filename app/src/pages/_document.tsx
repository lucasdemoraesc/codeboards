import { customTheme } from "@/libs/customTheme";
import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="preconnect" href="https://cataas.com" /> {/* TODO: Remover após parar de usar */}
				<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<body>
				{/* TIPS: Loader global, para habilitar basta descomentar este trecho, o useEffect do arquivo DefaultLayout.tsx e o import do global.css em _app.tsx */}
				{/* <div id="globalLoader">
					<div id="loader" className="three-body">
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
					</div>
				</div> */}
				<ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
