import DevOptions from "./Tabs";
import { CodeSnippet } from './Codebox';
import LearnMore from './LearnMore';

const EscrowDiv = () => {
    return (
        <div className="flex w-full bg-white dark:bg-[#1E1A1A]">
            <div className='flex mx-auto my-auto gap-[10%] lg:px-8 py-[100px] sm:block sm:space-y-9'>
                <div className='w-[45%] my-auto sm:w-[338px] sm:space-y-9'>
                    <h1 className="w-[538px] text-slate-900 dark:text-white text-[100px] font-black sm:w-[338px] sm:text-[56px]">
                        Escrow for Developers 
                    </h1>
                    <p className="w-[560px] text-slate-600 dark:text-white text-lg font-primary sm:w-[338px]">
                        With Middletrust's API, you can easily integrate escrow services 
                        into your existing platforms, applications, and workflows. 
                        Our API provides developers with access to all the functionality 
                        of our escrow platform, including creating and managing escrow agreements, 
                        managing escrow accounts, and releasing funds securely and reliably.
                    </p>
                    <LearnMore />
                </div>
                <div className="w-[55%] my-auto sm:w-[332px] sm:h-auto">
                    <DevOptions />
                </div>
            </div>
        </div>
    );
};

export default EscrowDiv;