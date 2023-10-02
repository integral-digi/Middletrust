"use client"
import Limiter from "./Limiter";

export const formattedCurr = (curr: number) => {
    return curr.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, // Ensure two decimal places
        maximumFractionDigits: 2, // Limit to two decimal places
    });
};

const ledgerBal: string = formattedCurr(23450);
const escrowBal: string = formattedCurr(30489);

const BalanceAndLimits = () => {
    return (
        <div className="w-full space-y-12">
            <div className="w-full space-y-5">
                <h3 className="dark:text-white text-slate-600 text-xl font-secondary tracking-tight">
                    Monthly Transaction Limit
                </h3>
                <div className="w-full left-0">
                    <Limiter bgcolor="#6A5ACD" progress='30'  height={8} />
                </div>
            </div>
            <div className="w-full">
                <div className="flex items-center space-x-5">
                    <div className="flex items-center pl-4 space-x-8 bg-transparent rounded-2xl border-2 border-neutral-100 w-60 h-24">
                        <img src="categories.svg" alt="category icon" className="" />
                        <div className="space-y-4">
                            <p className="dark:text-white text-slate-600 text-opacity-50 text-xs font-primary">
                                Ledger Balance
                            </p>
                            <p className="text-slate-600 dark:text-white text-2xl font-black">{ledgerBal}</p>
                        </div>
                    </div>
                    <div className="flex items-center pl-4 space-x-8 bg-transparent rounded-2xl border-2 border-neutral-100 w-60 h-24">
                        <img src="categories.svg" alt="category icon" className="" />
                        <div className="space-y-4">
                            <p className="dark:text-white text-slate-600 text-opacity-50 text-xs font-primary">
                                In Escrow
                            </p>
                            <p className="text-slate-600 dark:text-white text-2xl font-black">{escrowBal}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceAndLimits;