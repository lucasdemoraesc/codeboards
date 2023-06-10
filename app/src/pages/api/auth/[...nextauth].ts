import { User } from ".prisma/client";
import prisma from "@/libs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	secret: process.env.AUTH_SECRET,
	session: {
		strategy: "database"
	},
	pages: {
		signIn: "/signin"
	},
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID || "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
		})
	],
	callbacks: {
		session: ({ session, user }) => {
			const userFromDb = user as User;
			return {
				...session,
				user: userFromDb
			};
		}
	}
};

export default NextAuth(authOptions);
