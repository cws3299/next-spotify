import { useQuery } from "@tanstack/react-query";
import { getClientCredentialToken } from "../api/getAuthToken";

export const useClientCredentialToken = (): string | undefined => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["client-credential-token"],
        queryFn: getClientCredentialToken,
    });

    const clientCredentialToken = data?.access_token;
    return clientCredentialToken;
};
