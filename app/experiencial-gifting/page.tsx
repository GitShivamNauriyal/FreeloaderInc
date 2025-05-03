import React from "react";
import Merchandise from "./Merch";
import MidHeading from "./MidHeading";
import GallerySection from "@/components/About/GallerySection";
import MerchSubsection from "./Tangibles";
import Footer from "@/components/common/Footer";

const page = () => {
    return (
        <div className="mt-16">
            <Merchandise />
            <MidHeading />
            <GallerySection />
            <MerchSubsection />
            <Footer />
        </div>
    );
};

export default page;
