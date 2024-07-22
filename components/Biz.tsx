import Cards from './Cards';
import { motion } from "framer-motion";

const bizTextContent = {
  title: "Business landscape today",
  description: "In today's digital age, transactions are increasingly conducted online, making it easier than ever for scammers to prey on unsuspecting individuals and businesses. Middletrust is here to help you navigate this complex landscape by providing a secure and reliable platform for buying and selling."
};

const Biz = () => {
    return (
        <div className="flex items-center w-full h-fit bg-neutral-100 dark:bg-stone-900">
            <div className="w-full space-y-24 p-24 xl:space-y-8 xl:w-full xl:px-8">
                <div className="space-y-12 w-[65%] xl:w-full">
                    <h1 className="text-slate-900 leading-normal text-8xl font-black xl:text-6xl dark:text-white xl:leading-relaxed">
                        {bizTextContent.title}
                    </h1>
                    <p className="font-primary text-slate-600 dark:text-white leading-9 text-lg xl:w-full">
                        {bizTextContent.description}
                    </p>
                </div>
                <div className="w-full h-full">
                    <Cards />
                </div>
            </div>
        </div>
    );
};

export default Biz;
