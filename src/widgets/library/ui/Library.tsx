import { LibraryHeader, LibraryList } from "../index";

export function Library() {
    return (
        <div className="flex flex-col h-full overflow-hidden">
            <LibraryHeader />
            <LibraryList />
        </div>
    );
}
