"use client";

import React from "react";
import CoreTeam from "./CoreTeam";
import TeamVideoPlayback from "./VideoPlayback";
import PartnerAllianceSection from "./Partner";
import Creation from "./Creation";
import Careers from "./Careers";
// import Footer from "@/components/common/Footer";

const page = () => {
    return (
        <div style={{ fontFamily: "AgrandirWide, sans-serif" }}>
            <Creation />
            <TeamVideoPlayback />ś
            <CoreTeam />
            <PartnerAllianceSection />
            <Careers />
            {/* <Footer /> */}
        </div>
    );
};

export default page;
