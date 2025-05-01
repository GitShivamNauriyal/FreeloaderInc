import React from "react";
import AboutDescriptionSection from "./Description";
import StatementSection from "./StatementSection";
import TeamSection from "./Team";

const About = () => {
    return (
        <div id="about us" className="bg-black text-white py-16 px-4">
            <AboutDescriptionSection />
            <StatementSection />
            <TeamSection />
        </div>
    );
};

export default About;
