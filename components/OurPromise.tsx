import Link from "next/link";
import LearnMore from './LearnMore';

const promiseTexts = {
    title: "Our promise",
    subtitle: "At Middletrust, we believe that everyone deserves a safe and secure platform for conducting online transactions. That's why we've designed our platform to be user-friendly, reliable, and completely transparent. With Middletrust, you can rest assured that your transactions are secure and protected from fraud."
}

const OurPromise = () => {
    return (
        <div className="w-full bg-neutral-100 dark:bg-stone-900">
            <div className="flex items-center justify-between p-24 xl:px-8 xl:flex-col-reverse xl:space-y-8">
                <div className="w-[45%] xl:w-full xl:mt-8">
                    <img className="w-full h-auto xl:w-full xl:h-auto"
                        src="/assets/illus_three.svg" 
                        alt="illustration three" />
                </div>

                {/* other elements follow */}
                <div className="w-[45%] space-y-8 mt-auto mb-auto xl:w-full xl:space-y-8">
                    <h1 className="w-3/4 text-slate-900 dark:text-white xl:w-full leading-normal text-8xl font-black sm:text-4xl md:text-5xl xl:text-6xl xl:leading-relaxed">
                        {promiseTexts.title}
                    </h1>
                    <p className="w-full text-slate-600 dark:text-white text-lg font-primary xl:w-full">
                        {promiseTexts.subtitle}
                    </p>
                    <LearnMore />
                </div>
            </div>
        </div>
    );
};

export default OurPromise;