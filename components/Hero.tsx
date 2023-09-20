import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="flex w-full bg-white dark:bg-[#1E1A1A]  sm:h-auto">
            <div className="flex mx-auto my-auto pt-12 pb-24 gap-[10%] relative items-center lg:px-8 lg:block lg:space-y-16">   
                <div className="w-[45%] my-auto lg:w-[100%]">
                    <div className="w-[560px] lg:w-[100%]">
                        <span className="text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed">
                            Secure and &#8201;
                        </span>
                        <TypeAnimation
                            sequence={["seamless", 2000, "tidier", 2000, "clearer", 2000]}
                            wrapper="span"
                            className="text-indigo-500 text-8xl leading-normal font-black sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed"
                            cursor={true}
                            repeat={Infinity} />

                        <span className="text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed">
                            &#8201; transactions
                        </span>
                    </div>
                    <div className="font-primary w-[560px] text-slate-600 dark:text-white text-lg lg:w-[100%]">
                        the leading provider of state-of-the-art escrow services to safeguard individuals and businesses from transactional fraud.
                    </div>
                    <div className="flex-col space-x-9 w-full sm:w-[338px] sm:space-x-4">
                        <button className="w-[200px] h-[46.15px] bg-indigo-500 rounded-[5px] mt-[50px] sm:w-[160px]">
                            <p className="text-white text-lg font-primary">
                                Start Now
                            </p>
                        </button>
                        <Link className="text-indigo-500 text-lg font-primary" href="#">
                            Contact Sales
                        </Link>
                    </div>
                </div>
                <div className="absolute flex items-center left-[480px] -mt-32 mx-auto rotate-15 lg:hidden">
                    <img src="styled-arrow.svg"
                        alt="arrow" />
                </div>
                <div className="w-[50%] my-auto lg:w-[100%]">
                    <img className="w-[640px] h-[auto] lg:w-[100%] lg:h-auto"
                        src="illus_one.svg"
                        alt="illustration one" />
                </div>
            </div>
        </div>
    );
};

export default Hero;