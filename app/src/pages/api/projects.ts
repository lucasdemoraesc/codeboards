import { Project, User } from ".prisma/client";
import prisma from "@/libs/prisma";
import { methodNotAllowed, noContent, notAuthenticated } from "@/services/api/utils";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({ req });
	if (!session?.user)
		return notAuthenticated(res);

	const user = session.user as User;

	if (req.method === "GET") {
		const projects = await prisma.project.findMany({
			where: {
				ownerId: user.id
			}
		});
		return projects && projects.length > 0
			? res.send({ projects })
			: noContent(res, "No projects found");
	}

	if (req.method === "POST") {
		const data = JSON.parse(req.body) as Project;
		const project = await prisma.project.create({
			data: { ...data, ownerId: user.id, createdAt: new Date() }
		});
		return res.status(201).send({ project });
	}

	return methodNotAllowed(res);
};

export default handler;
