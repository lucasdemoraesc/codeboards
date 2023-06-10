import { User } from "next-auth";
import { useSession } from "next-auth/react";

export const useUser = (): User | undefined => {
	const { data } = useSession();
	return data?.user as User | undefined;
};
