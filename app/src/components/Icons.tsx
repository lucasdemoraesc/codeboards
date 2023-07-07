import { Icon, IconProps, useColorModeValue } from "@chakra-ui/react";

export const svgIconBaseProps: IconProps = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2px",
	strokeLinecap: "round",
	strokeLinejoin: "round"
};

export const ExternalLinkIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5" />
	</Icon>
);

export const GoogleLogo = (props: IconProps) => (
	<Icon viewBox="0 0 256 262" {...svgIconBaseProps} {...props}>
		<path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
		<path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
		<path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
		<path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
	</Icon>
);

export const GithubLogo = (props: IconProps) => (
	<Icon viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
			fill={useColorModeValue("#24292f", "#F6F8FA")}
		/>
	</Icon>
);

export const DayIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		{/* <path d="M14.828 14.828a4 4 0 1 0-5.656-5.656a4 4 0 0 0 5.656 5.656zm-8.485 2.829l-1.414 1.414M6.343 6.343L4.929 4.929m12.728 1.414l1.414-1.414m-1.414 12.728l1.414 1.414M4 12H2m10-8V2m8 10h2m-10 8v2" /> */}
		<circle cx="12" cy="12" r="5" />
		<path d="M12 2v2m0 16v2M4 12H2m20 0h-2m-.222-7.777l-2.222 2.031M4.222 4.223l2.222 2.031m0 11.302l-2.222 2.222m15.556-.001l-2.222-2.222" />
	</Icon>
);

export const NightIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z" />
	</Icon>
);

export const OverviewIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
	</Icon>
);

export const StarIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
	</Icon>
);

export const KanbanBoardIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="M4 4h6m4 0h6M4 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
	</Icon>
);

export const AngleDownIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		{/* <path d="m6 9l6 6l6-6" /> TablerIcons */}
		<path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" /> {/* HereIcons heroicons:chevron-down */}
	</Icon>
);

export const AngleRightIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="m8.25 4.5l7.5 7.5l-7.5 7.5" />
	</Icon>
);

export const DoubleAngleRightIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="m7 7l5 5l-5 5m6-10l5 5l-5 5" />
	</Icon>
);

export const DotIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props} stroke={"unset"}>
		<path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z" />
	</Icon>
);

export const ThreeDotsIcon = (props: IconProps) => (
	<Icon viewBox="0 0 256 256" {...svgIconBaseProps} {...props}>
		<path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28ZM48 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28Zm160 0a28 28 0 1 0 28 28a28 28 0 0 0-28-28Z" />
	</Icon>
);

export const PlusIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="M12 4.5v15m7.5-7.5h-15" />
	</Icon>
);

export const LogoutIcon = (props: IconProps) => (
	<Icon viewBox="0 0 24 24" {...svgIconBaseProps} {...props}>
		<path d="M13 12h9m0 0l-3.333-4M22 12l-3.333 4M14 7V5.174a2 2 0 0 0-2.166-1.993l-8 .666A2 2 0 0 0 2 5.84v12.32a2 2 0 0 0 1.834 1.993l8 .667A2 2 0 0 0 14 18.826V17" />
	</Icon>
);
