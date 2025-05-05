import React from "react";

const steps = [
    {
        title: "DEEP RESEARCH",
        content1:
            "Inspired by your brief, our team dives deep into researching all feasible aspects of probable possibilities leading to logical conclusion, that fits best to meet the timelines and quality expectation.",
        content2:
            "This information is then packaged in a brief summary for the design team.",
    },
    {
        title: "DESIGNING",
        content1:
            "Our designers use latest tools available in the market to create references and mockups that are not just aesthetically pleasing but also provide a clear direction for the project.",
    },
    {
        title: "PROTOTYPING",
        content1:
            "With the help of 3D printing, machinery, digital offset, Laser, enamel etching and other technologies, we create a physical sample that is 99% identical to the design mockup.",
    },
    {
        title: "EXECUTION",
        content1:
            "As per your feedback and approval, after multiple samples, we move into final production of the desired Experience, bringing your marketing objective into the tangible world.",
    },
];

const Process = () => {
    return (
        <div className="w-full py-20 px-4 relative">
            {/* Optional grid background, low opacity */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="border-r-2 border-white"></div>
                    ))}
                </div>
            </div>
            <section id="process" className="text-white overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                            OUR PROCESS
                        </h2>
                        <p className="text-xl opacity-80">
                            FOR BUILDING WORLD-CLASS EXPERIENCES
                        </p>
                    </div>

                    {/* Timeline container */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Vertical center line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white opacity-20 transform -translate-x-1/2" />

                        <div className="flex flex-col space-y-16">
                            {steps.map((step, index) => {
                                const isRight = index % 2 === 0;
                                return (
                                    <div
                                        key={index}
                                        className={`flex justify-between items-start w-full relative`}
                                    >
                                        {/* Left side content */}
                                        {isRight ? (
                                            <>
                                                <div className="w-1/2 pr-8 text-right">
                                                    <div className="inline-block text-left">
                                                        <h3 className="text-xl lg:text-2xl font-bold mb-2">
                                                            {step.title}
                                                        </h3>
                                                        <div className="hidden md:block">
                                                            <p className="opacity-80 mb-2">
                                                                {step.content1}
                                                            </p>
                                                            {step.content2 && (
                                                                <p className="opacity-80">
                                                                    {
                                                                        step.content2
                                                                    }
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Marker */}
                                                <div className="w-0 flex items-center justify-center relative">
                                                    <div className="w-5 h-5 bg-white border-4 border-black rounded-full z-10"></div>
                                                </div>

                                                <div className="w-1/2" />
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-1/2" />

                                                {/* Marker */}
                                                <div className="w-0 flex items-center justify-center relative">
                                                    <div className="w-5 h-5 bg-white border-4 border-black rounded-full z-10"></div>
                                                </div>

                                                <div className="w-1/2 pl-8 text-left">
                                                    <div>
                                                        <h3 className="text-2xl font-bold mb-2">
                                                            {step.title}
                                                        </h3>
                                                        <div className="hidden md:block">
                                                            <p className="opacity-80 mb-2">
                                                                {step.content1}
                                                            </p>
                                                            {step.content2 && (
                                                                <p className="opacity-80">
                                                                    {
                                                                        step.content2
                                                                    }
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Process;
