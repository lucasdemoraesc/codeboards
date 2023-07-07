import {
	accordionAnatomy,
	alertAnatomy,
	menuAnatomy,
	modalAnatomy,
	popoverAnatomy,
	switchAnatomy
} from "@chakra-ui/anatomy";
import {
	StyleFunctionProps,
	createMultiStyleConfigHelpers,
	defineStyleConfig,
	extendTheme,
	type ThemeConfig
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
	initialColorMode: "system",
	useSystemColorMode: true
};

const fonts = {
	heading: "Ubuntu, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
	body: "Open Sans, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
};

export const colors = {
	blue: {
		50: "#e3e6ff",
		100: "#bac0ff",
		200: "#919aff",
		300: "#6875ff",
		400: "#3f4fff",
		500: "#4126e7",
		600: "#2d1c9f",
		700: "#191256",
		800: "#050608",
		900: "#000000"
	}
};

const Modal = createMultiStyleConfigHelpers(
	modalAnatomy.keys
).defineMultiStyleConfig({
	baseStyle: ({ colorMode }) => ({
		dialog: { bg: colorMode === "dark" ? "gray.800" : "white" }
	})
});

const Popover = createMultiStyleConfigHelpers(
	popoverAnatomy.keys
).defineMultiStyleConfig({
	baseStyle: ({ colorMode }) => ({
		popper: {
			width: "fit-content",
			maxWidth: "fit-content"
		},
		content: {
			bg: colorMode === "dark" ? "gray.800" : "white"
		}
	})
});

const Menu = createMultiStyleConfigHelpers(
	menuAnatomy.keys
).defineMultiStyleConfig({
	baseStyle: ({ colorMode }) => ({
		list: {
			shadow: "lg",
			bg: colorMode === "dark" ? "gray.800" : "white"
		},
		item: {
			bg: colorMode === "dark" ? "gray.800" : "white",
			_hover: {
				bg: colorMode === "dark" ? "gray.700" : "gray.100"
			}
		}
	})
});

const Accordion = createMultiStyleConfigHelpers(
	accordionAnatomy.keys
).defineMultiStyleConfig({
	baseStyle: ({ colorMode }) => ({
		button: {
			_hover: {
				bg: colorMode === "dark" ? "gray.800" : "gray.100"
			}
		}
	})
});

const Button = defineStyleConfig({
	baseStyle: ({ colorMode }) => ({
		bg: colorMode === "dark" ? "gray.800" : "white"
	}),
	variants: {
		solid: ({ colorMode, colorScheme }) => {
			if (colorScheme !== "blue") return {};
			return {
				bg: colorMode === "dark" ? "blue.400" : "blue.500",
				color: "white",
				_hover: {
					bg: colorMode === "dark" ? "blue.500" : "blue.600"
				},
				_active: {
					bg: colorMode === "dark" ? "blue.600" : "blue.700"
				}
			};
		},
		outline: ({ colorMode, colorScheme }) => {
			return {
				bg: "transparent",
				color: colorMode === "dark" ? `${colorScheme}.300` : `${colorScheme}.600`
			};
		},
		ghost: ({ colorMode, colorScheme }) => {
			return {
				bg: "transparent",
				color: colorMode === "dark" ? `${colorScheme}.300` : `${colorScheme}.600`
			};
		}
	}
});

const Alert = createMultiStyleConfigHelpers(
	alertAnatomy.keys
).defineMultiStyleConfig({
	variants: {
		subtle: ({ colorScheme, colorMode }) => {
			if (colorScheme !== "blue" || colorMode === "dark") return {};
			return {
				container: {
					bg: "blue.50"
				}
			};
		}
	},
	baseStyle: {
		container: {
			borderRadius: "md"
		}
	}
});

const Switch = createMultiStyleConfigHelpers(
	switchAnatomy.keys
).defineMultiStyleConfig({
	baseStyle: ({ colorMode, colorScheme }) => ({
		track: {
			_checked: {
				bg: colorMode === "dark" ? `${colorScheme}.400` : `${colorScheme}.500`
			}
		}
	})
});

const components = {
	Modal,
	Popover,
	Menu,
	Button,
	Accordion,
	Alert,
	Switch,
	Spinner: {
		defaultProps: {
			colorScheme: "blue"
		}
	},
	NumberInput: {
		baseStyle: {
			focusBorderColor: "blue.200"
		}
	},
	Input: {
		baseStyle: {
			focusBorderColor: "blue.200"
		}
	},
	Textarea: {
		baseStyle: {
			focusBorderColor: "blue.200"
		}
	},
	Link: {
		baseStyle: {
			_hover: { textDecoration: "none" }
		}
	},
	Tooltip: {
		baseStyle: {
			rounded: "md",
			fontSize: "xs"
		},
		defaultProps: {
			openDelay: 200,
			placement: "auto"
		}
	}
};

const styles = {
	global: (props: StyleFunctionProps) => ({
		html: {
			fontSize: "16px"
		},
		body: {
			bg: mode("white", "gray.900")(props),
			color: mode("gray.600", "gray.300")(props)
		},
		"h1, h2, h3, h4, h5, h6": {
			color: mode("gray.700", "gray.200")(props)
		}
	})
};

export const customTheme = extendTheme({
	colors,
	fonts,
	components,
	config,
	styles
});
