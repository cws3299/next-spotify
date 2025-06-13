import axios from "axios";
import { SPOTIFY_BASE_URL } from "@/shared/lib/commonConfig";
import { GetNewReleasesResponse } from "@/entities/types/album";

export const getNewReleasesAlbum = async ({
    clientCredentialToken,
    limit,
}: {
    clientCredentialToken: string | undefined;
    limit: number;
}): Promise<GetNewReleasesResponse> => {
    try {
        const response = await axios.get(`${SPOTIFY_BASE_URL}/browse/new-releases?limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${clientCredentialToken}`,
            },
        });

        return response.data;
    } catch (err) {
        throw new Error("fail to fetch new releases");
    }
};
