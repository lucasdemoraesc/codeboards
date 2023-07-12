import { sanitizeInputString } from "@/services/utils";
import {
	Spinner,
	Stack,
	Text
} from "@chakra-ui/react";
import { BuiltInProviderType } from "next-auth/providers";
import {
	ClientSafeProvider,
	LiteralUnion,
	getProviders,
	useSession
} from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SignInError } from "./SignInError";
import { SocialLoginButtons } from "./SocialLoginButtons";

export const SignInForm = () => {
	const router = useRouter();
	const { status } = useSession();
	const [isLoadingProviders, setIsLoadingProviders] = useState(true);
	const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>>();
	const hasNoAuthProvider = !isLoadingProviders && Object.keys(providers ?? {}).length === 0;

	useEffect(() => {
		if (status === "authenticated") {
			router.replace(sanitizeInputString(router.query.callbackUrl?.toString()) ?? "/");
			return;
		}
		(async () => {
			const providers = await getProviders();
			setProviders(providers ?? undefined);
			setIsLoadingProviders(false);
		})();
	}, [status, router]);

	if (isLoadingProviders)
		return <Spinner />;

	if (hasNoAuthProvider)
		return (
			<Text>
				There are no authentication providers configured at the moment 🥀
			</Text>
		);

	return (
		<Stack spacing="4" w="330px">
			<SocialLoginButtons providers={providers} />
			{router.query.error && (
				<SignInError error={router.query.error.toString()} />
			)}
		</Stack>
	);
};
