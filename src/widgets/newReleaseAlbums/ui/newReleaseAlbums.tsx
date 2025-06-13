"use client";

import { useGetNewReleaseAlbum } from "@/entities/newReleaseAlbum/model/useGetNewReleaseAlbum";
import { NewReleaseAlbumCard } from "./newReleaseAlbumCard";

export default function NewReleaseAlbums() {
    const { data, isLoading } = useGetNewReleaseAlbum({ limit: 6 });

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No data available</p>;

    return (
        <section className="p-2">
            <h1 className="text-2xl font-bold py-2">New Released Albums</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {data.albums.items.map((album: any) => (
                    <NewReleaseAlbumCard
                        key={album.id}
                        image={album.images[0].url}
                        name={album.name}
                        artistName={album.artists[0].name}
                    />
                ))}
            </div>
        </section>
    );
}
