import DemoContainer from "@/features/DemoContainer";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

function IndexPage() {
	return <DemoContainer />;
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const session = await getSession(context);
	if (!session?.user)
		return { redirect: { permanent: false, destination: "/signin" } };
	return { props: { session } };
};

export default IndexPage;
