import { createQueryKeys } from "@lukemorales/query-key-factory";

export const newReleaseAlbumsQueryKey = createQueryKeys("newReleaseAlbums", {
    all: (params: { limit: number }) => [params],
});
