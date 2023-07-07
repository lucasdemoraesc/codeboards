import { userContext } from "@/providers/UserProvider";
import { useContext } from "react";

export const useUser = () => useContext(userContext);
