"use client";

import React from "react";
import CoreTeam from "./CoreTeam";
import TeamVideoPlayback from "./VideoPlayback";
import PartnerAllianceSection from "./Partner";
import Creation from "./Creation";
// import Footer from "@/components/common/Footer";

const page = () => {
    return (
        <div>
            <Creation />
            <TeamVideoPlayback />ś
            <CoreTeam />
            <PartnerAllianceSection />
            {/* <Footer /> */}
        </div>
    );
};

export default page;
