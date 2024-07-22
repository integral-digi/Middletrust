import LearnMore from './LearnMore';
import DevOptions from "./Tabs";
import { CodeSnippet } from "./Codebox";
import { codeNode } from './CodeAPI';

const devContent = {
    title: "Escrow for Developers",
    subtitle: "With Middletrust's API, you can easily integrate escrow services into your existing platforms, applications, and workflows. Our API provides developers with access to all the functionality of our escrow platform, including creating and managing escrow agreements, managing escrow accounts, and releasing funds securely and reliably."
}
const DevSection = () => {
    return (
        <div className="w-full bg-white dark:bg-[#1E1A1A]">
            <div className="p-24 xl:px-8">
                <div className="flex items-center justify-between">
                    <div className="w-[45%] h-full space-y-8 xl:w-full xl:space-y-8">
                        <h1 className="w-full text-slate-900 dark:text-white leading-normal text-8xl font-black xl:text-6xl xl:leading-relaxed">
                            {devContent.title}
                        </h1>
                        <p className="w-full text-slate-600 dark:text-white text-lg font-primary xl:w-full">
                            {devContent.subtitle}
                        </p>
                        <LearnMore />
                    </div>
                    <div className="relative w-[40%] h-auto text-white bg-indigo-500 dark:bg-stone-900 rounded-xl xl:hidden">
                        <div className='w-fit'>
                            <DevOptions />
                        </div>
                        <div className='absolute right-8 bottom-8'>
                            <CodeSnippet code={codeNode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevSection;