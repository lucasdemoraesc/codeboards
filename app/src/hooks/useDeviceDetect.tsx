import { useEffect, useState } from "react";

export default function useDeviceDetect(callback?: (isMobile: boolean) => void) {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		if (!window)
			return;

		const handleWindowSizeChange = () => {
			setIsMobile(window.innerWidth <= 768);
			if (callback)
				callback(isMobile || false);
		};

		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, [callback, isMobile]);

	return { isMobile };
}
