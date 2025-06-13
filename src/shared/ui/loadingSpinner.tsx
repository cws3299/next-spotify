"use client";

import { MoonLoader } from "react-spinners";

export const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[200px]">
            <MoonLoader color="#1db954" size={50} speedMultiplier={1.2} />
        </div>
    );
};
