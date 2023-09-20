const CTA = () => {
    return (
        <div className=" mx-auto w-[90%] h-[491px] relative max-w-[1200px] bg-indigo-500 dark:bg-stone-900 overflow-clip">            
            <div className="bg-image-opaque float-left lg:hidden">
             <img 
                className=""
                src="bg-image-opaque.svg" 
                alt="background image" />
            </div> 
            <div className="mx-auto pt-24 h-max w-[560px] lg:w-[72%]"> 
                <h1 className="text-center text-white leading-normal font-secondary text-6xl sm:text-3xl md:text-4xl lg:text-4xl lg:leading-relaxed">
                    Why wait? Get started now
                </h1>
            </div>
            <div className="flex items-center justify-evenly translate-x-[-25%] w-[600px] my-auto mx-auto space-x-0 pt-12 lg:translate-x-0 lg:w-max">
                <button className="w-[48%] h-[60px] rounded-[10px] border border-white hover:bg-white my-auto lg:mx-auto lg:w-[100%] lg:flex lg:items-center">
                    <p className="text-white text-lg hover:text-indigo-500 font-black lg:px-9">
                        Sign up now
                    </p>
                </button>
                <button className="w-[12%] h-[60px] bg-white rounded-[10px] my-auto lg:hidden">
                    <img 
                        src="googleplay.svg"
                        alt="google play"
                        className="w-6 h-6 mx-auto my-auto" />
                </button>
                <button className="w-[12%] h-[60px] bg-white rounded-[10px] my-auto lg:hidden">
                    <img 
                        src="apple.svg"
                        alt="apple store"
                        className="w-6 h-6 mx-auto my-auto" />
                </button>
            </div>
            
            <div className="bg-image-opaque-two float-right absolute right-0 top-[360px] lg:top-[376px] lg:-bottom-full">
             <img 
                className=""
                src="bg-image-opaque-two.svg"
                alt="background image" /> 
            </div>             
        </div>
    );
};

export default CTA;