import React from "react";
import { useRouter } from "next/router";
import Home from "../components/Home";

export default function Index() {
    const router = useRouter();

    function handleExploreCategories() {
        router.push("/categories");
    }

    return <Home onExploreCategories={handleExploreCategories} />;
}
