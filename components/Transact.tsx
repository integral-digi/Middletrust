import LearnMore from './LearnMore';
import { motion } from 'framer-motion';

const Transact = () => {
    return (
        <div className="flex w-full bg-white dark:bg-[#1E1A1A]">
            <motion.div className='flex mx-auto my-auto gap-[10%] lg:px-8 py-24 lg:block lg:space-y-9'>
                <div className='w-[45%] space-y-9 my-auto lg:w-[100%] lg:space-y-9'>
                    <h1 className="w-[538px] text-slate-900 dark:text-white font-black lg:w-[100%] leading-normal text-8xl sm:text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed">
                        Transact smartly
                    </h1>
                    <p className="w-[540px] text-slate-600 dark:text-white text-lg font-primary lg:w-[100%]">
                        You have worked hard for your money, and you deserve what you paid for. 
                        Don't let fraudsters ruin your online transactions. Sign up for Middletrust 
                        today and experience the peace of mind that comes with using a trusted escrow service.
                    </p>
                    <LearnMore />
                </div>
                <div className="w-[45%] my-auto lg:w-[100%] lg:h-auto">
                    <img 
                        src="illus_four.svg"
                        className="h-[auto] w-[640px] lg:h-auto"
                        alt="illustration four"
                        key="img" />
                </div>
            </motion.div>
        </div>
    );
};

export default Transact;