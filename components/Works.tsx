import FAQ from "./FAQs";

const howItWorksTextContent = {
  title: "How it works",
  description: "Our platform is designed to provide complete peace of mind to buyers and sellers alike. Here's how it works:"
};

const HowItWorks = () => {
    return (
        <div className="w-full bg-white dark:bg-[#1E1A1A]">
            <div className="flex items-center justify-between w-full h-fit p-24 xl:px-8 xl:flex-col xl:space-y-16">
                <div className="w-[40%] h-fit xl:w-full space-y-4">
                    <h1 className="text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl xl:text-6xl xl:leading-relaxed">
                        {howItWorksTextContent.title}
                    </h1>
                    <p className="text-left text-slate-600 dark:text-white text-lg font-primary">
                        {howItWorksTextContent.description}
                    </p>
                    <hr className='xl:w-full h-px bg-gray-300' />
                    <div className="steps-work">
                        <FAQ />
                    </div>
                </div>
                <div className="w-1/2 h-fit xl:w-full -mb-24 xl:m-0">
                    <img 
                        className="w-full h-full"
                        src="/assets/illus_two.svg"
                        alt="illustration" 
                    />
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
