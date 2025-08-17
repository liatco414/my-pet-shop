import React from "react";
import { useRouter } from "next/router";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

export default function Index() {
    const router = useRouter();

    function handleExploreCategories() {
        router.push("/categories");
    }
    return (
        <>
            <NavBar />
            <Home onExploreCategories={handleExploreCategories} />
        </>
    );
}
