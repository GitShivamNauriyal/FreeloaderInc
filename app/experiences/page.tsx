"use client";

import React from "react";
import BrandExperiences from "./BrandExp";
import MidHeading from "./MidHeading";
import ReelGlance from "./ReelGlance";
import GallerySection from "@/components/About/GallerySection";
import CokeGlance from "./CokeGlance";
// import Footer from "@/components/common/Footer";

const imageList = Array.from(
    { length: 30 },
    (_, i) => `/assets/images/experience/gal${i + 1}.png`
);

const page = () => {
    return (
        <div>
            <BrandExperiences />
            <MidHeading />
            <ReelGlance />
            <GallerySection images={imageList} title="Event Moments" />
            <CokeGlance />
            {/* <Footer /> */}
        </div>
    );
};

export default page;
