"use client"
import { memo, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import RightFlyOut from "./RightFlyOut";
import { formattedCurr } from "./Balances";
import LeftIcon from "@/public/images/Lefticon";
import { users } from "@/app/transactions/components/TransactionData";
  


const Transactable = () => {
    return (
        <div className="space-y-6 w-full">
            <h3 className="dark:text-white text-slate-600 text-xl font-secondary tracking-tight">
                Transaction History
            </h3>
            <hr className="w-full h-0.5 dark:bg-neutral-100" />
            <div className="w-full h-max">
                <div className="space-y-6">
                {users.map((userData) => (
                    <div key={userData.id} className="space-y-6 flex justify-between">
                        <div>
                            <div className="space-x-6 flex items-center">
                                <Popover data-popover-target={`right-flyout-${userData.id}`}>
                                    <Popover.Button>
                                    <img src={userData.avatar} alt={userData.name} className="w-12 h-12 rounded-full" />
                                    </Popover.Button>
                                    <Popover.Overlay className="fixed inset-0 bg-black opacity-70 z-30" />
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                        >
                                        <Popover.Panel className="z-50 top-0 right-0 w-max h-max fixed" id={`right-flyout-${userData.id}`}>
                                            <RightFlyOut user={userData} />
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                                <div>
                                    <p className="text-slate-600 dark:text-white text-base font-secondary">
                                        {userData.name}
                                    </p>
                                    <p className="text-slate-600 dark:text-white text-xs font-primary">
                                        {userData.lastTxn.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center top-0">
                            <div className="text-right">
                                <p className="text-slate-600 dark:text-white text-base font-secondary">
                                    {formattedCurr(userData.lastTxn.amount)}
                                </p>
                            </div>
                            <div>
                                <div className="pl-6 h-3 w-auto">
                                    {userData.icon}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Transactable;