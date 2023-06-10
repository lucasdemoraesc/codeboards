import { NextApiResponse } from "next";

export const noContent = (res: NextApiResponse, customMessage?: string) =>
	res.status(204).json({ message: customMessage ?? "No content" });

export const methodNotAllowed = (res: NextApiResponse, customMessage?: string) =>
	res.status(405).json({ message: customMessage ?? "Method not allowed" });

export const notAuthenticated = (res: NextApiResponse, customMessage?: string) =>
	res.status(401).json({ message: customMessage ?? "Not authenticated" });

export const notFound = (res: NextApiResponse, customMessage?: string) =>
	res.status(404).json({ message: customMessage ?? "Not found" });

export const badRequest = (res: NextApiResponse, customMessage?: unknown) =>
	res.status(400).json({ message: customMessage ?? "Bad request" });

export const forbidden = (res: NextApiResponse, customMessage?: string) =>
	res.status(403).json({ message: customMessage ?? "Forbidden" });
