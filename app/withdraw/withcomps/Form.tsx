"use client";
import { useState } from "react";
import InfoBar from "./InfoSidebar";

const WithdrawForm: React.FC = () => {
    const [withdrawAmt, setWithdrawAmt] = useState<number | string>(0);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setWithdrawAmt(value ? parseFloat(value) : '');
    };

    const currencies = { naira: "₦", dollar: "$" };
    
    return (
        <div className="mt-24 grid grid-cols-2 gap-[20%] justify-between w-full xl:space-y-24 xl:block">
            <div className="w-full h-full space-y-24 dark:bg-[#1E1A1A]">
                <div className="flex items-center w-full space-x-7">
                    <span className="">
                        <p className="dark:text-white text-slate-600 text-2xl font-black">{currencies.dollar}</p>
                    </span>
                    <input
                        type="number"
                        value={withdrawAmt}
                        onChange={handleChange}
                        className="w-full dark:text-white bg-transparent border-none text-slate-600 text-5xl font-black focus:outline-none selection:outline-none focus:border-none"
                    />
                </div>
                <button id="withdrawal" className="w-full px-8 h-20 bg-transparent rounded-lg border-2 border-gray-300 border-dashed">
                    <p className="text-center dark:text-white text-slate-600 text-base font-secondary">
                        Add Bank Account
                    </p>
                </button>
            </div>
            <div className="w-full">
                <InfoBar withdrawAmt={withdrawAmt} />
            </div>
        </div>
    );
};

export default WithdrawForm;
