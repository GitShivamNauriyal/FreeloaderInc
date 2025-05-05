import React from "react";
import Merchandise from "./Merch";
import MidHeading from "./MidHeading";
import GallerySection from "@/components/About/GallerySection";
import MerchSubsection from "./Tangibles";
// import Footer from "@/components/common/Footer";
import MerchGlance from "./MerchGlance";

const imageList = Array.from(
    { length: 16 },
    (_, i) => `/assets/images/merchandise/gal${i + 1}.png`
);

const page = () => {
    return (
        <div>
            <Merchandise />
            <MidHeading />
            <MerchGlance />
            <GallerySection images={imageList} title="Showcase" />
            <MerchSubsection />
            {/* <Footer /> */}
        </div>
    );
};

export default page;
