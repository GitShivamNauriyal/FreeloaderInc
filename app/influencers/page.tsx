"use client";

import React from "react";
import TopInfluencers from "./TopInf";
import MidHeading from "./MidHeading";
import GallerySection from "@/components/About/GallerySection";

const imageList = Array.from(
    { length: 8 },
    (_, i) => `/assets/images/influencer/gal${i + 1}.png`
);

const page = () => {
    return (
        <div style={{ fontFamily: "AgrandirWide, sans-serif" }}>
            <TopInfluencers />
            <MidHeading />
            <GallerySection
                images={imageList}
                title="Influencers Gallery"
                imagesPerSlide={6}
            />
        </div>
    );
};

export default page;
