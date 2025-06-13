"use client";

import Image from "next/image";
import { PlayIcon } from "@radix-ui/react-icons";

interface Props {
    image: string;
    name: string;
    artistName?: string;
}

export function NewReleaseAlbumCard({ image, name, artistName }: Props) {
    return (
        <div className="relative rounded-xl overflow-hidden group shadow-sm transition-all hover:shadow-md">
            {/* 앨범 이미지 */}
            <div className="relative w-full aspect-square">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover 시 오버레이 */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />

                {/* 재생 버튼 */}
                <div className="absolute bottom-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-black rounded-full p-2 hover:bg-neutral-200">
                        <PlayIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* 텍스트 */}
            <div className="mt-2 px-1">
                <p className="text-sm font-semibold truncate">{name}</p>
                <p className="text-xs text-muted-foreground truncate">
                    {artistName ?? "No artist name"}
                </p>
            </div>
        </div>
    );
}
