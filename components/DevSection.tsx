import LearnMore from './LearnMore';
import DevOptions from "./Tabs";
import { CodeSnippet } from "./Codebox";
import { code } from './Codebox';

const DevSection = () => {
    return (
        <div className="flex w-full bg-white dark:bg-[#1E1A1A] relative">
            <div className='mx-auto relative'>
                <div className='flex ml-[-104px] gap-[20%] lg:space-y-9 my-auto lg:px-8 lg:ml-0 py-24 lg:block'>
                    <div className='my-auto w-[40%] h-[100%] lg:w-screen lg:space-y-9'>
                        <h1 className="w-[538px] text-slate-900 dark:text-white leading-normal text-8xl font-black sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed">
                            Escrow for developers 
                        </h1>
                        <p className="w-[560px] text-slate-600 dark:text-white text-lg font-primary lg:w-[84%] ">
                            With Middletrust's API, you can easily integrate escrow services 
                            into your existing platforms, applications, and workflows. 
                            Our API provides developers with access to all the functionality 
                            of our escrow platform, including creating and managing escrow agreements, 
                            managing escrow accounts, and releasing funds securely and reliably.
                        </p>
                        <LearnMore />
                    </div>
                    <div className="w-[55%] my-auto h-[auto] text-white bg-indigo-500 dark:bg-stone-900 rounded-[10px] lg:hidden">
                        <div className='mx-auto'>
                            <DevOptions />
                        </div>
                        <div className='absolute right-0 bottom-28'>
                            <CodeSnippet code={code} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevSection;