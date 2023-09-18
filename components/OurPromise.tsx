import Link from "next/link";
import LearnMore from './LearnMore';

const OurPromise = () => {
    return (
        <div className="flex w-full bg-neutral-100 dark:bg-stone-900">
            <div className="flex mx-auto gap-[10%] my-auto py-24 lg:px-8 lg:block lg:space-y-9">
                <div className="w-[45%] lg:w-[100%]">
                    <img className="w-[640px] h-[auto] lg:w-[100%] lg:h-auto"
                        src="illus_three.svg" 
                        alt="illustration three" />
                </div>

                {/* other elements follow */}
                <div className="w-[45%] space-y-9 mt-auto mb-auto lg:w-[100%] lg:space-y-9">
                    <h1 className="w-[538px] text-slate-900 dark:text-white lg:w-[84%] leading-normal text-8xl font-black sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed">
                        Our promise
                    </h1>

                    <p className="w-[540px] text-slate-600 dark:text-white text-lg font-primary lg:w-[100%]">
                        At Middletrust, we believe that everyone deserves a safe and 
                        secure platform for conducting online transactions. That's why we've designed our 
                        platform to be user-friendly, reliable, and completely transparent. With Middletrust, 
                        you can rest assured that your transactions are secure and protected from fraud.
                    </p>
                    <LearnMore />
                </div>
            </div>
        </div>
    );
};

export default OurPromise;