"use client";

import ClientsSection from "../About/ClientsSection";
import Creation from "../Overview/Creation";
import ExperienceMarketingSection from "../Overview/ExpMarket";
import Process from "../Overview/Process";
import TangibleGap from "../Overview/TangibleGap";
import VideoPlayback from "../Overview/VideoPlayback";

// import { Boxes } from "../ui/backgrounds/background-boxes";
// import { HeroParallax } from "../ui/backgrounds/hero-parallax";

export default function HeroSection() {
    // const products = [
    //     {
    //         title: "McDonald's",
    //         link: "https://www.mcdonalds.com/",
    //         thumbnail:
    //             "https://mir-s3-cdn-cf.behance.net/projects/max_808/cdff1e77436079.Y3JvcCwyODAwLDIxOTAsMCww.jpg",
    //     },
    //     {
    //         title: "Sprite",
    //         link: "https://www.sprite.com/",
    //         thumbnail:
    //             "https://www.coca-cola.com/content/dam/onexp/in/en/homepage/banners/sprite-website.png",
    //     },
    //     {
    //         title: "Coca-Cola",
    //         link: "https://www.coca-cola.com/",
    //         thumbnail:
    //             "https://mir-s3-cdn-cf.behance.net/project_modules/fs/82e4c690302975.5e142011dfffb.jpg",
    //     },
    //     // {
    //     //     title: "Ferrari",
    //     //     link: "https://www.ferrari.com/",
    //     //     thumbnail:
    //     //         "https://i.ytimg.com/vi/F49Yv8fZQ9k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZwuRszWOw7jCKa8OQYVxJV35peA", // Official Ferrari PNG
    //     // },
    //     {
    //         title: "Harper's Bazaar India",
    //         link: "https://www.harpersbazaar.in/",
    //         thumbnail:
    //             "https://www.thegreateasternhome.com/storage/uploads/articles/568f8bbfbe35f312fa1036092b116d23.jpg", // Wikimedia PNG
    //     },
    //     {
    //         title: "Delhi Times",
    //         link: "https://timesofindia.indiatimes.com/delhi-times",
    //         thumbnail:
    //             "https://tma-live.s3.ap-south-1.amazonaws.com/referenceArtworks/1582183291297/Ref%20Images%20for%20MO%20%2820%29_logo.jpg", // Wikimedia PNG
    //     },
    //     {
    //         title: "Royal Enfield",
    //         link: "https://www.royalenfield.com/",
    //         thumbnail:
    //             "https://www.royalenfield.com/content/dam/royal-enfield/shotgun-650/landing/desktop/shotgun-650-motorcycle.jpg", // Official Royal Enfield PNG
    //     },
    //     // {
    //     //     title: "Nike",
    //     //     link: "https://www.nike.com/",
    //     //     thumbnail:
    //     //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAh4m1NjMAEeF2gD-ZhunzER68MfGH3-TomA&s", // Wikimedia PNG
    //     // },
    //     {
    //         title: "Adidas",
    //         link: "https://www.adidas.com/",
    //         thumbnail:
    //             "https://i.pinimg.com/736x/97/42/3c/97423ca515e825adcab3e0d77cced64b.jpg", // Wikimedia PNG
    //     },
    //     {
    //         title: "Apple",
    //         link: "https://www.apple.com/",
    //         thumbnail:
    //             "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/634d61ab95ff7003477f6c1f_d28Qv2T_gk1iZiHd2jgwYTCtdKB0cEX-hQmhwLIbzglorQzErM9tLeq0Sw0jp4j37mXfa6YP9zQA2ZcaW1D5DdjqOBmvB8kH3yd-F9dcEpxvDwlSxao1Qlgn24KC_GDcRdsd7TJ0zJjTTVURHJX3A-hrjWKp0JpuAPL28G6nrXA55Sad6Ujn-A79sA.jpeg", // Wikimedia PNG
    //     },
    //     {
    //         title: "Google",
    //         link: "https://www.google.com/",
    //         thumbnail:
    //             "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/Google_for_India_0.jpeg?size=1200:675", // Wikimedia PNG
    //     },
    //     {
    //         title: "Amazon",
    //         link: "https://www.amazon.com/",
    //         thumbnail:
    //             "https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2019%5Ehomepage-august.jpg", // Wikimedia PNG
    //     },
    //     {
    //         title: "Samsung",
    //         link: "https://www.samsung.com/",
    //         thumbnail:
    //             "https://img.global.news.samsung.com/global/wp-content/uploads/2015/11/Samsung-Newsroom_main_2.jpg", // Wikimedia PNG
    //     },
    //     {
    //         title: "Tesla",
    //         link: "https://www.tesla.com/",
    //         thumbnail:
    //             "https://mir-s3-cdn-cf.behance.net/project_modules/source/63007a40280859.5779785319f0f.jpg", // Wikimedia PNG
    //     },
    //     {
    //         title: "Netflix",
    //         link: "https://www.netflix.com/",
    //         thumbnail:
    //             "https://cxl.com/wp-content/uploads/2021/08/netflix-homepage.jpg",
    //     },
    //     {
    //         title: "Microsoft",
    //         link: "https://www.microsoft.com/",
    //         thumbnail:
    //             "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/06/full/1686046036-9475.jpeg?im=FeatureCrop,size=(1200,720)", // Wikimedia PNG
    //     },
    // ];

    return (
        // <section className="relative w-full h-screen overflow-hidden grad-fade-right bg-gradient-to-br text-white">
        //     <Boxes className="mask-fade-right" />

        //     <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 sm:p-20 pointer-events-none">
        //         <h1 className="text-[9vw] font-extrabold leading-32 tracking-tight scale-y-90">
        //         FREE
        //         </h1>
        //         <h1 className="text-[9vw] font-extrabold leading-32 tracking-tight scale-y-90">
        //         LOADER
        //         </h1>
        //         <h1 className="text-[9vw] font-extrabold leading-32 tracking-normal pb-4 scale-y-90">
        //         AGENCY
        //         </h1>
        //         <p className="text-lg sm:text-2xl font-mono text-cyan-200">
        //         MEMORIES CRAFTED, GIFTED AND FELT.
        //         </p>
        //         </div>
        // </section>

        // {/* Optional: <HeroParallax products={products} /> */}

        <div className="flex flex-col items-center justify-center">
            <main className="w-full h-[70vh] lg:h-[90vh] mt-16 flex flex-col justify-between px-4 lg:px-12 py-10 hero-container">
                <div /> {/* Spacer */}
                <div className="text-left">
                    <h1 className="z-10 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold leading-[0.8] tracking-[0.1rem] text-white font-freelogo">
                        FREE
                        <br />
                        LOADER
                        <br />
                        AGENCY
                    </h1>
                    <p className="text-sm sm:text-lg font-light tracking-[4px] text-gray-300 mt-2 font-freeheading">
                        EXPERIENCES • MERCH • INFLUENCERS
                    </p>
                </div>
            </main>
            <Creation />
            <VideoPlayback />
            <TangibleGap />
            <ExperienceMarketingSection />
            <ClientsSection />
            <Process />
        </div>
    );
}
