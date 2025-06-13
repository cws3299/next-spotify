import Link from "next/link";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Library } from "@/widgets/library/index";

export function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col w-[331px] h-full">
            <div className="text-spotify rounded-lg w-full h-full p-2 mb-2 mr-2 ">
                <ul className="list-none p-0 m-0">
                    <li>
                        <Link href="/" passHref>
                            <div className="flex items-center gap-5 pb-2 text-sm font-semibold hover:text-spotify-hover text-spotify hover:cursor-pointer">
                                <HomeIcon className="w-6 h-6" />
                                <span className="text-xl font-bold">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/search" passHref>
                            <div className="flex items-center gap-5 pb-2 text-sm font-semibold hover:text-spotify-hover text-spotify hover:cursor-pointer">
                                <MagnifyingGlassIcon className="w-6 h-6" />
                                <span className="text-xl font-bold">Search</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <Library />
            </div>
        </div>
    );
}
