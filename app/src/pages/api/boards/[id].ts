import { Board } from ".prisma/client";
import prisma from "@/libs/prisma";
import { notAuthenticated } from "@/services/api/response.utils";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getSession({ req });
	if (!session?.user)
		return notAuthenticated(res);

	const id = req.query.id?.toString();
	if (req.method === "DELETE") {
		const board = await prisma.board.delete({
			where: { id }
		});
		return res.send({ board });
	}

	if (req.method === "PUT") {
		const data = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as Partial<Board>;
		data.updatedAt = new Date();
		const board = await prisma.board.update({
			where: { id },
			data
		});
		return res.send({ board });
	}
};

export default handler;
