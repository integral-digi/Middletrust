"use client"
import { Table, Group } from "@mantine/core";
import { formattedCurr } from "./Balances";


interface tableDataProps {
    id: number;
    avatar: string;
    name: string;
    time: string;
    amount: number;
    icon: string
};

const tableData: tableDataProps[] = [
    {id: 1, avatar: "/avatars/avatar.jpg", name: "Abel Davidson", time: "7 hours ago", amount: 4250, icon: "lefticon.svg"},  
    {id: 2, avatar: "/avatars/avatar.jpg", name: "Abel Davidson", time: "Yesterday", amount: 32.50, icon: "lefticon.svg"},
    {id: 3, avatar: "/avatars/avatar.jpg", name: "Abel Davidson", time: "Yesterday", amount: 255, icon: "lefticon.svg"},
    {id: 4, avatar: "/avatars/avatar.jpg", name: "Abel Davidson", time: "Yesterday", amount: 1299, icon: "lefticon.svg"},
];

const divansactable = () => {
    return (
        <div className="space-y-6">
            <h3 className="dark:text-white text-slate-600 text-xl font-secondary tracking-tight">Transaction History</h3>
            <hr className="w-[100%] h-0.5 dark:bg-neutral-100" />
            <div className="w-full h-max">
                <div className="space-y-6">
                    {tableData.map((userData) => (
                        <div key={userData.id} className="gap-y-6 flex justify-between">
                            <div>
                                <Group className="space-x-6 flex items-center">
                                    <img src={userData.avatar} alt={userData.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="text-slate-600 dark:text-white text-base font-secondary">{userData.name}</p>
                                        <p className="text-slate-600 dark:text-white text-xs font-primary">{userData.time}</p>
                                    </div>
                                </Group>
                            </div>
                            <div className="flex items-center top-0">
                                <div className="text-right">
                                    <p className="text-slate-600 dark:text-white text-base font-secondary">{formattedCurr(userData.amount)}</p>
                                </div>
                                <div>
                                    <div className="pl-6">
                                        <img src={userData.icon} alt="left icon" className="h-3 w-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default divansactable;