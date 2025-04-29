"use client";

// import { Boxes } from "../ui/backgrounds/background-boxes";
import { HeroParallax } from "../ui/backgrounds/hero-parallax";

export default function HeroSection() {
    const products = [
        {
            title: "McDonald's",
            link: "https://www.mcdonalds.com/",
            thumbnail:
                "https://c8.alamy.com/zooms/9/311186be542a4d74b162d50afdd4c686/bxjp52.jpg",
        },
        {
            title: "Sprite",
            link: "https://www.sprite.com/",
            thumbnail:
                "https://www.coca-cola.com/content/dam/onexp/in/en/homepage/banners/sprite-website.png",
        },
        {
            title: "Coca-Cola",
            link: "https://www.coca-cola.com/",
            thumbnail:
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/82e4c690302975.5e142011dfffb.jpg",
        },
        {
            title: "Ferrari",
            link: "https://www.ferrari.com/",
            thumbnail:
                "https://i.ytimg.com/vi/F49Yv8fZQ9k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZwuRszWOw7jCKa8OQYVxJV35peA", // Official Ferrari PNG
        },
        {
            title: "Harper's Bazaar India",
            link: "https://www.harpersbazaar.in/",
            thumbnail:
                "https://www.thegreateasternhome.com/storage/uploads/articles/568f8bbfbe35f312fa1036092b116d23.jpg", // Wikimedia PNG
        },
        {
            title: "Delhi Times",
            link: "https://timesofindia.indiatimes.com/delhi-times",
            thumbnail:
                "https://tma-live.s3.ap-south-1.amazonaws.com/referenceArtworks/1582183291297/Ref%20Images%20for%20MO%20%2820%29_logo.jpg", // Wikimedia PNG
        },
        {
            title: "Royal Enfield",
            link: "https://www.royalenfield.com/",
            thumbnail:
                "https://www.royalenfield.com/content/dam/royal-enfield/shotgun-650/landing/desktop/shotgun-650-motorcycle.jpg", // Official Royal Enfield PNG
        },
        {
            title: "Nike",
            link: "https://www.nike.com/",
            thumbnail:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAh4m1NjMAEeF2gD-ZhunzER68MfGH3-TomA&s", // Wikimedia PNG
        },
        {
            title: "Adidas",
            link: "https://www.adidas.com/",
            thumbnail:
                "https://i.pinimg.com/736x/97/42/3c/97423ca515e825adcab3e0d77cced64b.jpg", // Wikimedia PNG
        },
        {
            title: "Apple",
            link: "https://www.apple.com/",
            thumbnail:
                "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/634d61ab95ff7003477f6c1f_d28Qv2T_gk1iZiHd2jgwYTCtdKB0cEX-hQmhwLIbzglorQzErM9tLeq0Sw0jp4j37mXfa6YP9zQA2ZcaW1D5DdjqOBmvB8kH3yd-F9dcEpxvDwlSxao1Qlgn24KC_GDcRdsd7TJ0zJjTTVURHJX3A-hrjWKp0JpuAPL28G6nrXA55Sad6Ujn-A79sA.jpeg", // Wikimedia PNG
        },
        {
            title: "Google",
            link: "https://www.google.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png", // Wikimedia PNG
        },
        {
            title: "Amazon",
            link: "https://www.amazon.com/",
            thumbnail:
                "https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2019%5Ehomepage-august.jpg", // Wikimedia PNG
        },
        {
            title: "Samsung",
            link: "https://www.samsung.com/",
            thumbnail:
                "https://img.global.news.samsung.com/global/wp-content/uploads/2015/11/Samsung-Newsroom_main_2.jpg", // Wikimedia PNG
        },
        {
            title: "Tesla",
            link: "https://www.tesla.com/",
            thumbnail:
                "https://mir-s3-cdn-cf.behance.net/project_modules/source/63007a40280859.5779785319f0f.jpg", // Wikimedia PNG
        },
        {
            title: "Netflix",
            link: "https://www.netflix.com/",
            thumbnail:
                "https://repository-images.githubusercontent.com/587606503/2e0422ac-0946-4ff1-a4b4-373f691463ae", // Wikimedia PNG
        },
        {
            title: "Microsoft",
            link: "https://www.microsoft.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png", // Wikimedia PNG
        },
    ];

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

        <main className="w-full">
            <HeroParallax products={products} />
        </main>
    );
}
