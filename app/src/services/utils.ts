
export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
	const res = await fetch(input, init);
	return res.json();
};

export const sendRequest = async <ResponseData>({
	url,
	method,
	body
}: {
	url: string;
	method: string;
	body?: Record<string, unknown>;
}): Promise<{ data?: ResponseData; error?: Error; }> => {
	try {
		const response = await fetch(url, {
			method,
			mode: "cors",
			body: body ? JSON.stringify(body) : undefined
		});
		if (!response.ok)
			throw new Error(response.statusText);
		const data = await response.json();
		return { data };
	}
	catch (e) {
		console.error(e);
		return { error: e as Error };
	}
};

export const isTruncated =
	(element?: HTMLElement) =>
		element && (element.offsetWidth < element.scrollWidth);

const isVariableString = (str: string): boolean => /^\{\{.*\}\}$/.test(str);

export const sanitizeInputString = (unsafe?: string) => {
	if (!unsafe)
		return undefined;

	return String(unsafe)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
};

export const sanitizeUrl = (url: string): string => {
	return url.startsWith("http") ||
		url.startsWith("mailto:") ||
		url.startsWith("tel:") ||
		url.startsWith("sms:") ||
		isVariableString(url)
		? url
		: `https://${url}`;
};

export const booleanToString = (value: boolean) => JSON.stringify(value);

export const booleanFromString = (value: string | undefined | null) => value?.toLocaleLowerCase() === "true" || value === "1";
