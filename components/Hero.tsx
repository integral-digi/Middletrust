import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const heroTextContent = {
  title: "Secure and ",
  animationSequence: ["seamless", 2000, "tidier", 2000, "smoother", 2000],
  transactions: " transactions",
  description: "the leading provider of state-of-the-art escrow services to safeguard individuals and businesses from transactional fraud.",
  buttonText: "Start Now",
  contactText: "Contact Sales"
};

const Hero = () => {
    return (
        <div className="flex items-center w-full bg-white dark:bg-[#1E1A1A] h-full">
            <div className="flex justify-between items-center xl:flex-col xl:space-y-16 p-24 xl:px-8 relative">   
                <div className="w-[40%] xl:w-full space-y-12">
                    <div className="w-full md:w-full">
                        <span className="text-slate-900 dark:text-white leading-normal text-8xl font-black xl:text-6xl xl:leading-relaxed">
                            {heroTextContent.title}
                        </span>
                        <TypeAnimation
                            sequence={heroTextContent.animationSequence}
                            wrapper="span"
                            className="text-indigo-500 text-8xl leading-normal font-black sm:text-4xl md:text-5xl xl:text-6xl xl:leading-relaxed"
                            cursor={true}
                            repeat={Infinity} />
                        <span className="text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl xl:text-6xl xl:leading-relaxed">
                            {heroTextContent.transactions}
                        </span>
                    </div>
                    <div className="font-primary text-slate-600 dark:text-white text-lg xl:w-full">
                        {heroTextContent.description}
                    </div>
                    <div className="flex items-center space-x-9 w-full">
                        <button className=" bg-indigo-500 h-12 px-12 flex items-center rounded-md">
                            <p className="text-white text-lg font-primary">
                                {heroTextContent.buttonText}
                            </p>
                        </button>
                        <Link className="text-indigo-500 text-lg font-primary" href="#">
                            {heroTextContent.contactText}
                        </Link>
                    </div>
                </div>
                <div className="absolute left-[600px] mb-32 flex items-center rotate-15 xl:hidden">
                    <img src="/assets/styled-arrow.svg"
                        alt="arrow" />
                </div>
                <div className="w-1/2 xl:w-full">
                    <img className="xl:w-full xl:h-auto"
                        src="/assets/illus_one.svg"
                        alt="illustration one" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
