import React from "react";
import AboutDescriptionSection from "./Description";
import StatementSection from "./StatementSection";
import TeamSection from "./Team";
import ProjectsSection from "./ProjectsSetion";
import ClientsSection from "./ClientsSection";
import GallerySection from "./GallerySection";

const About = () => {
    return (
        <div id="about us" className="bg-black text-white py-16">
            <AboutDescriptionSection />
            <StatementSection />
            <TeamSection />
            <ProjectsSection />
            <ClientsSection />
            <GallerySection />
        </div>
    );
};

export default About;
