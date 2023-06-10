import { SignInContainer } from "@/features/signIn/SignInContainer";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const SignInPage: NextPageWithLayout = () => {
	return <SignInContainer />;
};

SignInPage.getLayout = (page: ReactElement) => page;

export default SignInPage;
