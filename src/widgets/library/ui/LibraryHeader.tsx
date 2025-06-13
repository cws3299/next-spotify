"use client";

import { Button } from "@/shared/components/ui/button";
import { BookmarkIcon, PlusIcon } from "@heroicons/react/24/solid";

export function LibraryHeader() {
    return (
        <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-5 flex-grow">
                <BookmarkIcon className="w-6 h-6 text-primary" />
                <h2 className="text-lg font-bold truncate">Your Library</h2>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 p-1 text-white hover:bg-twitter-blue"
            >
                <PlusIcon className="w-3 h-3" />
            </Button>
        </div>
    );
}
