"use client"
import { memo, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import RightFlyOut from "./RightFlyOut";
import { formattedCurr } from "./Balances";
import LeftIcon from "@/public/images/Lefticon";
import SearchModal from "./Search";

  
export interface UserProps {
    avatar: string;
    name: string;
    email: string;
    mobile: string;
    sales: number;
    purchases: number;
    disputes: number;
    totalSales: number;
    totalPurchases: number;
    id: number; 
    time: string; 
    amount: number; 
    icon: JSX.Element; 
    isVerified: boolean;
}

export const users: UserProps[] = [
    {
        id: 0,
        avatar: "/avatars/avatar.jpg",
        name: "Daniel Raymonds",
        email: "dray23@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 0,
        purchases: 3,
        disputes: 0,
        totalSales: 0,
        totalPurchases: 643,
        time: "7 Hours ago",
        amount: 4250,
        icon: <LeftIcon />,
        isVerified: true
    },
    {
        id: 1,
        avatar: "/avatars/1u.jpg",
        name: "Johnny Bravo",
        email: "johnnyboy123@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 12,
        purchases: 4,
        disputes: 1,
        totalSales: 2725,
        totalPurchases: 377,
        time: "Yesterday",
        amount: 32.50,
        icon: <LeftIcon />,
        isVerified: true
    },
    {
        id: 2,
        avatar: "/avatars/2u.jpg",
        name: "Saffy Demba",
        email: "saffydafire@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 0,
        purchases: 3,
        disputes: 0,
        totalSales: 0,
        totalPurchases: 2660,
        time: "Yesterday",
        amount: 255,
        icon: <LeftIcon />,
        isVerified: true
    },
    {
        id: 3,
        avatar: "/avatars/3u.jpg",
        name: "Abella Davidson",
        email: "d.abella@gmail.com",
        mobile: "+1 (777) 555-5565",
        sales: 0,
        purchases: 1,
        disputes: 0,
        totalSales: 0,
        totalPurchases: 1299,
        time: "Yesterday",
        amount: 1299,
        icon: <LeftIcon />,
        isVerified: false
    },
    // Only 4 users allowed
];

const Transactable = () => {
    return (
        <div className="space-y-6">
            <h3 className="dark:text-white text-slate-600 text-xl font-secondary tracking-tight">Transaction History</h3>
            <hr className="w-full h-0.5 dark:bg-neutral-100" />
            <div className="w-full h-max">
                <div className="space-y-6">
                {users.map((userData) => (
                    <div key={userData.id} className="gap-y-6 flex justify-between">
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
                                <Popover.Panel className="z-50 absolute top-0 right-0 w-max h-max" id={`right-flyout-${userData.id}`}>
                                    <RightFlyOut user={userData} />
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                        <div>
                            <p className="text-slate-600 dark:text-white text-base font-secondary">{userData.name}</p>
                            <p className="text-slate-600 dark:text-white text-xs font-primary">{userData.time}</p>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center top-0">
                        <div className="text-right">
                        <p className="text-slate-600 dark:text-white text-base font-secondary">{formattedCurr(userData.amount)}</p>
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