"use client";

import { Button } from "@/shared/components/ui/button";

export function LoginButton() {
    return (
        <Button
            size="lg"
            className="bg-spotify hover:bg-spotify-hover text-white font-semibold hover:cursor-pointer"
        >
            Login
        </Button>
    );
}
