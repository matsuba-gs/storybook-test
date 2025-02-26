"use client";

import { useRouter } from "next/navigation";

export default function RouterComponent() {
    const router = useRouter();

    return (
        <button onClick={() => router.push("/about")}>Go to About</button>
    );
}