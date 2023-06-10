import { GithubLogo } from "@/components/Icons";
import { Button, Stack } from "@chakra-ui/react";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, LiteralUnion, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
	providers:
	| Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
	| undefined;
};

export const SocialLoginButtons = ({ providers }: Props) => {
	const { query } = useRouter();
	const { status } = useSession();
	const [authLoading, setAuthLoading] = useState<LiteralUnion<BuiltInProviderType, string>>();

	const handleSignIn = async (provider: string) => {
		setAuthLoading(provider);
		signIn(provider, {
			callbackUrl:
				query.callbackUrl?.toString() ?? "/"
		});
		setTimeout(() => setAuthLoading(undefined), 3000);
	};

	return (
		<Stack>
			{providers?.github && (
				<Button
					leftIcon={<GithubLogo />}
					onClick={() => handleSignIn("github")}
					data-testid="github"
					isLoading={["loading", "authenticated"].includes(status) || authLoading === "github"}
					variant="outline"
				>
					Continue with GitHub
				</Button>
			)}
		</Stack>
	);
};
