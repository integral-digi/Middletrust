import FAQ from "./FAQs";

const HowItWorks = () => {
    return (
        <div className="flex w-full bg-white dark:bg-[#1E1A1A] h-max lg:h-max lg:block">
            <div className="flex mx-auto my-auto lg:px-8 py-24 gap-[15%] lg:block lg:space-y-16">
                <div className="w-[40%] h-max lg:w-[100%]">
                    <h1 className="w-[auto] text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed">
                        How it works
                    </h1>
                    <p className="w-[465px] lg:w-[84%] text-slate-600 dark:text-white text-lg font-primary pb-[36px]">
                        Our platform is designed to provide complete peace of mind to buyers and sellers alike. Here's how it works:
                    </p>
                    <hr className='w-[540px] lg:w-[100%] h-px bg-gray-300' />
                    <div className="steps-work lg:block">
                        <FAQ />
                    </div>
                </div>
                <div className="w-1/2 my-auto lg:w-[100%] lg:mx-auto">
                    <img className="w-[640px] my-auto h-[auto] lg:w-[100%]"
                        src="illus_two.svg"
                        alt="illustration" />
                </div>
            </div>
        </div>
    );
}

export default HowItWorks; 