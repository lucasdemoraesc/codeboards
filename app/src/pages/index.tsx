import UnderConstructionContainer from "@/features/UnderConstructionContainer";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

function IndexPage() {
	return <UnderConstructionContainer title="Overview" />;
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const session = await getServerSession(context.req, context.res, authOptions);
	if (!session?.user)
		return {
			redirect: {
				permanent: false,
				destination: "/signin"
			}
		};
	return { props: { session } };
};

export default IndexPage;
