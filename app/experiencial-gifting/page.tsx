import React from "react";
import Merchandise from "./Merch";
import MidHeading from "./MidHeading";
import GallerySection from "@/components/About/GallerySection";
import MerchSubsection from "./Tangibles";
// import Footer from "@/components/common/Footer";
import MerchGlance from "./MerchGlance";

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Merchandise />
            <MidHeading />
            <MerchGlance />
            <GallerySection />
            <MerchSubsection />
            {/* <Footer /> */}
        </div>
    );
};

export default page;
