import { useQuery } from "@tanstack/react-query";
import { newReleaseAlbumsQueryKey } from "../lib/queryKey";
import { useClientCredentialToken } from "@/entities/auth/model/useClientCredentialToken";
import { getNewReleasesAlbum } from "../api/getNewReleaseAlbum";

type UseGetNewReleaseAlbumParams = {
    limit: number;
};

export const useGetNewReleaseAlbum = ({ limit }: UseGetNewReleaseAlbumParams) => {
    const clientCredentialToken = useClientCredentialToken();

    return useQuery({
        queryKey: newReleaseAlbumsQueryKey.all({ limit }).queryKey,
        queryFn: async () => {
            if (!clientCredentialToken) throw new Error("No token available");

            return getNewReleasesAlbum({ clientCredentialToken, limit });
        },
    });
};
