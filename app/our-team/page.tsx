import React from "react";
import CoreTeam from "./CoreTeam";
import TeamVideoPlayback from "./VideoPlayback";
import PartnerAllianceSection from "./Partner";
import Footer from "@/components/common/Footer";

const page = () => {
    return (
        <div>
            <CoreTeam />
            <TeamVideoPlayback />
            <PartnerAllianceSection />
            <Footer />
        </div>
    );
};

export default page;
