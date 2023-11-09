import { useMemo } from "react";
import { users } from "@/app/transactions/components/TransactionData";
import { UserProps } from "@/app/transactions/components/TransactionData";
import { formattedCurr } from "./Balances";
import { Tooltip } from "flowbite-react";
import Link from "next/link";



const RightFlyOut = ({ user }: { user: UserProps }) => {
    const spanLabels: string[] = useMemo(() => [
        "Trustee Name",
        "Email Address",
        "Mobile No",
        "Sales",
        "Purchases",
        "Disputes",
        "Total Sales",
        "Total Purchases",
      ], []);

    const divStyle: string = "flex items-center justify-between";

    return (
        <div className="bg-white dark:bg-[#1E1A1A] h-full">
            <div className="relative px-16 pt-16 pb-80 w-fit h-full z-50 space-y-7">
                <h1 className="text-slate-600 dark:text-white text-xl font-secondary">Trustee Insight</h1>
                <hr className="w-full h-px border border-gray-300" />
                <div className="mt-6 space-y-7">
                    <div className="relative">
                        <img src={user.avatar} alt={user.name} className="w-28 h-28 rounded-full" />
                        <Tooltip
                            animation="duration-1000"
                            style='light'
                            placement='bottom'
                            content={`${user.name} is verified`}
                            className='dark:bg-stone-900 dark:text-white font-primary w-max px-4 py-4 ml-24'>
                            {user.isVerified ? <img src="verify.svg" alt="verified" className="absolute left-[92px] bottom-4 cursor-pointer" /> : null}
                        </Tooltip>
                    </div>
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[0]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary text-right">{user.name}</p>
                    </div>
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[1]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary text-right">{user.email}</p>
                    </div>
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[2]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary text-right">{user.mobile}</p>
                    </div>
                    <div className="w-full h-16 bg-neutral-100 dark:bg-stone-900 absolute left-0 flex items-center">
                        <h3 className="text-slate-600 dark:text-white text-base font-secondary pl-16">
                            Transaction Overview
                        </h3>
                    </div>
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[3]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary text-right">{user.sales === 0 ? "NIL" : user.sales}</p>
                    </div>
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[4]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary text-right">{user.purchases === 0 ? "NIL" : user.purchases}</p>
                    </div>
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[5]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary text-right">{user.disputes === 0 ? "NIL" : user.disputes}</p>
                    </div>
                    <hr className="w-full h-px border border-gray-300" />
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[6]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary text-right">{formattedCurr(user.totalSales)}</p>
                    </div>
                    <div className={divStyle}>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{spanLabels[7]}</p>
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">{formattedCurr(user.totalPurchases)}</p>
                    </div>
                    <div className="space-y-1 py-16">
                        <p className="text-slate-600 dark:text-white text-sm font-secondary">
                        Would you like to create a{" "}
                        <span className="text-indigo-500 underline cursor-pointer">
                            <Link href="/create">new transaction</Link>
                        </span>{" "}
                        with this user?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightFlyOut;
