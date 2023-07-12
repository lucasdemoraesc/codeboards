
export const fetcher = async (input: RequestInfo, init?: RequestInit) => {
	const res = await fetch(input, init);
	return res.json();
};

export const isTruncated =
	(element?: HTMLElement) =>
		element && (element.offsetWidth < element.scrollWidth);

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

export const booleanToString = (value: boolean) => JSON.stringify(value);

export const booleanFromString = (value: string | undefined | null) => value?.toLocaleLowerCase() === "true" || value === "1";
