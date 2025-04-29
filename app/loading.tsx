// app/loading-screen.tsx (Client Component)
"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulate loading (or use a real check)

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
                <div className="text-xl font-bold">Loading...</div>
            </div>
        );
    }

    return <>{children}</>;
}
