"use client"
import { Progress } from "@mantine/core";

const ledgerBal: number = 23450;
const escrowBal: number = 30489;

const BalanceAndLimits = () => {
    return (
        <div className="w-[100%] space-y-12">
            <div className="w-max">
                <h3 className="dark:text-white text-slate-600 text-xl font-secondary tracking-tight">
                    Monthly Transaction Limit
                </h3>
                <Progress value={30} mt="md" size="sm" radius="xl" />
            </div>
            <div className="w-[100%]">
                <div className="flex items-center">
                    <img src="category.svg" alt="category icon" className="" />
                    <div className="block">
                        <p className="dark:text-white text-slate-600 text-opacity-50 text-xs font-primary">
                            Ledger Balance
                        </p>
                        <p className="text-slate-600 dark:text-white text-2xl font-black">${ledgerBal.toFixed(2)}</p>
                    </div>
                    <div className="block">
                        <p className="dark:text-white text-slate-600 text-opacity-50 text-xs font-primary">
                            In Escrow
                        </p>
                        <p className="text-slate-600 dark:text-white text-2xl font-black">${escrowBal.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceAndLimits;