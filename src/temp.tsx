// app/layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LibraryHead from "@/components/LibraryHead";
import Library from "@/components/Library";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen p-2">
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-[331px] h-full">
                <div className="bg-white text-black rounded-lg w-full h-full p-2 mb-2 mr-2 dark:bg-neutral-900 dark:text-white">
                    <ul className="list-none p-0 m-0">
                        <li>
                            <Link href="/" passHref>
                                <div className="flex items-center gap-5 pb-2 text-sm font-semibold hover:text-[#FAF0E6] text-gray-500 hover:cursor-pointer">
                                    <HomeIcon className="w-6 h-6" />
                                    <span className="text-xl font-bold">Home</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/search" passHref>
                                <div className="flex items-center gap-5 pb-2 text-sm font-semibold hover:text-[#FAF0E6] text-gray-500 hover:cursor-pointer">
                                    <MagnifyingGlassIcon className="w-6 h-6" />
                                    <span className="text-xl font-bold">Search</span>
                                </div>
                            </Link>
                        </li>
                    </ul>

                    <LibraryHead />
                    <Library />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col w-full h-full rounded-lg bg-white text-black p-2 mb-2 mr-2 dark:bg-neutral-900 dark:text-white">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
