// import { motion, useScroll } from "framer-motion";
import ParallaxText from "./ParallaxText";

const Brands = () => {
    const brandNames = [
        ["sellfy", "contra", "quadplan", "talentql", "acumen"], 
        ["konga", "enyata", "bumpa", "mano", "ariga", "seller"], 
        ["decagon", "bigibrand", "fluidcoins", "glamafric"]
    ];

    const logoShelf = brandNames.map((names, rowIndex) => (
        <div key={rowIndex} className="flex lg:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:space-x-0">
            {names.map((name, colIndex) => (
                <img
                    key={`${name}-${colIndex}`}
                    src={`/images/${name}.svg`}
                    className="pr-12 py-12"
                    alt={name}
                />
            ))}
        </div>
    ));

    return (
        <div className="flex w-full h-full bg-neutral-100 dark:bg-stone-900 py-24 relative"> 
            <div className="mx-auto my-auto lg:space-y-0 lg:px-8">
                <div className="w-95% lg:w-[100%] space-y-9 lg:space-y-6">
                    <h1 className="w-[813px] text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl lg:text-6xl lg:w-[84%] lg:leading-relaxed">
                        Serving local & global brands
                    </h1>
                    <p className="font-primary w-[813px] text-slate-600 dark:text-white text-lg lg:w-[100%]">
                        Middletrust is helping innovative brands eliminate transactional and payment fraud. We are trusted by 
                        local and international brands who value credibility, security 
                        and speed in their everyday dealings with customers, freelancers, 
                        and artisans.
                    </p>
                    <div className="w-[100%] h-auto pt-6 left-0 top-0 flex-col justify-start items-start inline-flex lg:pt-0 lg:w-[100%]">
                        <ParallaxText baseVelocity={-8}>
                            <div className="">{logoShelf[0]}</div>
                        </ParallaxText>
                        <ParallaxText baseVelocity={8}>
                            <div className="lg:hidden">{logoShelf[1]}</div>
                        </ParallaxText>
                        <ParallaxText baseVelocity={-8}>
                            <div className="lg:hidden">{logoShelf[2]}</div>
                        </ParallaxText>
                    </div>  
                </div>              
            </div>
        </div>
    );
};

export default Brands;
