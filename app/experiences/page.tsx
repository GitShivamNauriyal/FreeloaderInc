import React from "react";
import BrandExperiences from "./BrandExp";
import MidHeading from "./MidHeading";
import ReelGlance from "./ReelGlance";
import GallerySection from "@/components/About/GallerySection";
import CokeGlance from "./CokeGlance";
import Footer from "@/components/common/Footer";

const page = () => {
    return (
        <div className="mt-4">
            <BrandExperiences />
            <MidHeading />
            <ReelGlance />
            <GallerySection />
            <CokeGlance />
            <Footer />
        </div>
    );
};

export default page;
