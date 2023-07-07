import { userContext } from "@/features/account/UserProvider";
import { useContext } from "react";

export const useUser = () => useContext(userContext);
