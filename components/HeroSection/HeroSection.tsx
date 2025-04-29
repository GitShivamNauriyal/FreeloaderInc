"use client";

// import { Boxes } from "../ui/backgrounds/background-boxes";
import { HeroParallax } from "../ui/backgrounds/hero-parallax";

export default function HeroSection() {
    const products = [
        {
            title: "Coca-Cola",
            link: "https://www.coca-cola.com/",
            thumbnail:
                "https://www.coca-colacompany.com/content/dam/journey/us/en/brands/coca-cola/coca-cola-logo.png", // Official Coca-Cola PNG
        },
        {
            title: "Sprite",
            link: "https://www.sprite.com/",
            thumbnail:
                "https://www.coca-colacompany.com/content/dam/journey/us/en/brands/coca-cola/coca-cola-logo.png", // Official Coca-Cola PNG
            // "https://www.coca-colacompany.com/content/dam/journey/us/en/brands/sprite/sprite-logo.png", // Official Sprite PNG
        },
        {
            title: "McDonald's",
            link: "https://www.mcdonalds.com/",
            thumbnail:
                "https://www.coca-colacompany.com/content/dam/journey/us/en/brands/coca-cola/coca-cola-logo.png", // Official Coca-Cola PNG
            // "https://www.mcdonalds.com/content/dam/sites/usa/nfl/public/brand-logos/mcdonalds-logo.png", // Official McDonald's PNG
        },
        {
            title: "Ferrari",
            link: "https://www.ferrari.com/",
            thumbnail:
                "https://www.ferrari.com/sites/en/en-en/logo/ferrari-logo-black.png", // Official Ferrari PNG
        },
        {
            title: "Harper's Bazaar India",
            link: "https://www.harpersbazaar.in/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Harper%27s_Bazaar_Logo.svg/1200px-Harper%27s_Bazaar_Logo.svg.png", // Wikimedia PNG
        },
        {
            title: "Delhi Times",
            link: "https://timesofindia.indiatimes.com/delhi-times",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Times_of_India_logo.svg/1200px-Times_of_India_logo.svg.png", // Wikimedia PNG
        },
        {
            title: "Royal Enfield",
            link: "https://www.royalenfield.com/",
            thumbnail:
                "https://www.royalenfield.com/content/dam/royalenfield/india/home-page/logo/re-logo.png", // Official Royal Enfield PNG
        },
        {
            title: "Nike",
            link: "https://www.nike.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png", // Wikimedia PNG
        },
        {
            title: "Adidas",
            link: "https://www.adidas.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png", // Wikimedia PNG
        },
        {
            title: "Apple",
            link: "https://www.apple.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png", // Wikimedia PNG
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
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png", // Wikimedia PNG
        },
        {
            title: "Samsung",
            link: "https://www.samsung.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png", // Wikimedia PNG
        },
        {
            title: "Tesla",
            link: "https://www.tesla.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png", // Wikimedia PNG
        },
        {
            title: "Netflix",
            link: "https://www.netflix.com/",
            thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png", // Wikimedia PNG
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
