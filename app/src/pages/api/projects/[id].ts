import { Project } from ".prisma/client";
import prisma from "@/libs/prisma";
import { methodNotAllowed, notAuthenticated, notFound } from "@/services/api/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({ req });
	if (!session?.user)
		return notAuthenticated(res);

	const id = req.query.id?.toString();

	if (req.method === "GET") {
		const project = await prisma.project.findFirst({
			where: { id }
		});
		return project ? res.send({ project }) : notFound(res);
	}

	if (req.method === "DELETE") {
		const project = await prisma.project.delete({
			where: { id }
		});
		return res.send({ project });
	}

	if (req.method === "PUT") {
		const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as Partial<Project>;
		data.updatedAt = new Date();
		const project = await prisma.project.update({
			where: { id },
			data
		});
		return res.send({ project });
	}

	return methodNotAllowed(res);
};

export default handler;
