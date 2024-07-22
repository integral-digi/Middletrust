const brandsText = {
    title: "Serving local & global brands",
    subtitle: "Middletrust is helping innovative brands eliminate transactional and payment fraud. We are trusted by local and international brands who value credibility, security and speed in their everyday dealings with customers, freelancers, and artisans.",
}

const Brands = () => {
    const brandNames = [
        ["sellfy", "contra", "quadplan", "talentql", "acumen"], 
        ["konga", "enyata", "bumpa", "mano", "ariga", "seller"], 
        ["decagon", "bigibrand", "fluidcoins", "glamafric"]
    ];

    const logoShelf = brandNames.map((names, rowIndex) => (
        <div key={rowIndex} className="flex items-center flex-wrap justify-between">
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
        <div className="w-full h-fit bg-neutral-100 dark:bg-stone-900 "> 
            <div className="p-24 xl:px-8">
                <div className="w-[95%] xl:w-full space-y-8 xl:space-y-6">
                    <h1 className="w-3/4 text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl xl:text-6xl xl:w-[84%] xl:leading-relaxed">
                        {brandsText.title}
                    </h1>
                    <p className="font-primary w-3/4 text-slate-600 dark:text-white text-lg xl:w-full">
                        {brandsText.subtitle}
                    </p>
                    <div className="w-full h-fit pt-6 flex-col space-y-2">   
                        <div>{logoShelf[0]}</div>
                        <div className="xl:hidden">{logoShelf[1]}</div>
                        <div className="xl:hidden">{logoShelf[2]}</div>
                    </div>  
                </div>              
            </div>
        </div>
    );
};

export default Brands;
