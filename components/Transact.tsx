import LearnMore from './LearnMore';
import { motion } from 'framer-motion';

const transactTexts = {
    title: "Transact smartly",
    subtitle: "You have worked hard for your money, and you deserve what you paid for. Don't let fraudsters ruin your online transactions. Sign up for Middletrust today and experience the peace of mind that comes with using a trusted escrow service.",
    image: "/assets/illus_four.svg"
}

const Transact = () => {
    return (
        <div className="w-full bg-white dark:bg-[#1E1A1A]">
            <motion.div className='flex items-center justify-between p-24 xl:px-8 xl:flex-col xl:space-y-8'>
                <div className='w-[45%] space-y-8 my-auto xl:w-full xl:space-y-8'>
                    <h1 className="w-3/4 text-slate-900 dark:text-white font-black xl:w-full leading-normal text-8xl xl:text-6xl xl:leading-relaxed">
                        {transactTexts.title}
                    </h1>
                    <p className="w-full text-slate-600 dark:text-white text-lg font-primary xl:w-full">
                        {transactTexts.subtitle}
                    </p>
                    <LearnMore />
                </div>
                <div className="w-[45%] my-auto xl:w-full xl:h-auto">
                    <img 
                        src={transactTexts.image}
                        className="h-fit w-full xl:h-auto"
                        alt="illustration" 
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Transact;