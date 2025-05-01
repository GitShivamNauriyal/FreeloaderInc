import React from "react";
import AboutDescriptionSection from "./Description";
import StatementSection from "./StatementSection";
import TeamSection from "./Team";
import ProjectsSection from "./ProjectsSetion";
import ClientsSection from "./ClientsSection";

const About = () => {
    return (
        <div id="about us" className="bg-black text-white py-16 px-4">
            <AboutDescriptionSection />
            <StatementSection />
            <TeamSection />
            <ProjectsSection />
            <ClientsSection />
        </div>
    );
};

export default About;
