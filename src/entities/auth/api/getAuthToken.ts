import axios from "axios";

import { CLIENT_ID, CLIENT_SECRET } from "@/shared/lib/commonConfig";
import { ClientCredentialTokenResponse } from "@/entities/types/auth";

const encodeBase64 = (data: string) => {
    if (typeof window !== "undefined") return btoa(data);
    return Buffer.from(data).toString("base64");
};

export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
    try {
        const body = new URLSearchParams({
            grant_type: "client_credentials",
        });

        const res = await axios.post("https://accounts.spotify.com/api/token", body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${encodeBase64(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
            },
        });
        return res.data;
    } catch (err) {
        throw new Error("Fail to fetch token");
    }
};
