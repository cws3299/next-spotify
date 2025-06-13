"use client";

import { Button } from "@/shared/components/ui/button";

export function LoginButton() {
    return (
        <Button
            size="lg"
            className="bg-twitter-blue hover:bg-twitter-blue-darker text-white font-semibold"
        >
            Login
        </Button>
    );
}
