import DemoContainer from "@/features/DemoContainer";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

function FavoritesPage() {
	return <DemoContainer />;
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const session = await getServerSession(context.req, context.res, authOptions);
	if (!session?.user)
		return {
			redirect: {
				permanent: false,
				destination: "/signin?callbackUrl=/favorites"
			}
		};
	return { props: { session } };
};

export default FavoritesPage;
