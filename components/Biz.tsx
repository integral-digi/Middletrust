import Cards from './Cards';
import { motion } from "framer-motion"

const Biz = () => {
    return (
        <div className="flex w-full h-full bg-neutral-100 dark:bg-stone-900 relative">
            <div className='mx-auto my-auto space-y-9 py-24 lg:px-8 lg:space-y-9 lg:w-full'>
                <h1 className=" w-[813px] lg:max-w-[84%] text-slate-900 leading-normal text-8xl font-black sm:text-4xl md:text-5xl lg:text-6xl dark:text-white lg:leading-relaxed">
                    Business landscape today
                </h1>
                <p className="font-primary w-[813px] text-slate-600 dark:text-white leading-9 text-lg lg:w-full ">
                    In today's digital age, transactions are increasingly conducted online, 
                    making it easier than ever for scammers to prey on unsuspecting individuals 
                    and businesses. Middletrust is here to help you navigate this complex landscape 
                    by providing a secure and reliable platform for buying and selling.
                </p>
                <div className="w-[100%] h-max">
                    <Cards />
                </div>
            </div>
        </div>
    );
};

export default Biz;
