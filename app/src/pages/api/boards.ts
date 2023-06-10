import { Board, User } from ".prisma/client";
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
		const projectId = req.query.projectId?.toString() || undefined;
		const boards = await prisma.board.findMany({
			where: {
				ownerId: user.id,
				projectId
			}
		});
		return boards && boards.length > 0
			? res.send({ boards })
			: noContent(res, "No boards found");
	}

	if (req.method === "POST") {
		const data = JSON.parse(req.body) as Board;
		const board = await prisma.board.create({
			data: { ...data, ownerId: user.id, createdAt: new Date() }
		});
		return res.status(201).send({ board });
	}

	return methodNotAllowed(res);
};

export default handler;
