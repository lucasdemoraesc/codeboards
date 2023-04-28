/*
* Forked from: https://github.com/baptisteArno/typebot.io/blob/main/apps/builder/src/assets/styles/routerProgressBar.css
*/

import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

export const useRouterProgressBar = () =>
	useEffect(() => {
		if (typeof window !== "undefined") {
			NProgress.configure({ showSpinner: false });

			Router.events.on("routeChangeStart", () => {
				NProgress.start();
			});

			Router.events.on("routeChangeComplete", () => {
				NProgress.done();
			});

			Router.events.on("routeChangeError", () => {
				NProgress.done();
			});
		}
	}, []);
