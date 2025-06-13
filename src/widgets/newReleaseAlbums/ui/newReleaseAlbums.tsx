// import { getNewReleases } from "@/lib/api/getNewReleases";
// import { ReleaseAlbumCard } from "@/widgets/library";

export async function newReleaseAlbums() {
    //   const data = await getNewReleases();

    return (
        <section className="p-2">
            <h1 className="text-2xl font-bold py-2">New Released Albums</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {/* {data.albums.items.map((album: any) => (
          <ReleaseAlbumCard
            key={album.id}
            image={album.images[0].url}
            name={album.name}
            artistName={album.artists[0].name}
          />
        ))} */}
            </div>
        </section>
    );
}
