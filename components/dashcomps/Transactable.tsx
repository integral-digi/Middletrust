"use client"
import { Table, Group } from "@mantine/core";


interface tableDataProps {
    id: number;
    avatar: string;
    name: string;
    time: string;
    amount: number;
    icon: string
};

const tableData: tableDataProps[] = [
    {id: 1, avatar: "/avatars/avatar.png", name: "Abel Davidson", time: "7 hours ago", amount: 4250, icon: "lefticon.svg"},  
    {id: 2, avatar: "/avatars/avatar.png", name: "Abel Davidson", time: "Yesterday", amount: 32.50, icon: "lefticon.svg"},
    {id: 3, avatar: "/avatars/avatar.png", name: "Abel Davidson", time: "Yesterday", amount: 255, icon: "lefticon.svg"},
    {id: 4, avatar: "/avatars/avatar.png", name: "Abel Davidson", time: "Yesterday", amount: 1299, icon: "lefticon.svg"},
];

const Transactable = () => {
    return (
        <div className="">
            <h3 className="dark:text-white text-slate-600 text-xl font-secondary tracking-tight">Transaction History</h3>
            <hr className="w-[100%] h-0.5 dark:bg-neutral-100" />
            <Table className="py-6">
                {tableData.map((userData) => 
                    <Table.Tr key={userData.id} className="">
                        <Table.Td>
                            <Group className="flex items-center">
                                <img src={userData.avatar} alt={userData.name} className="w-14 h-14 rounded-full" />
                                <div className="justify-items-start">
                                    <p className="w-max text-slate-600 text-base font-secondary">{userData.name}</p>
                                    <p className="w-max text-slate-600 text-xs font-primary">{userData.time}</p>
                                </div>
                            </Group>
                        </Table.Td>
                        <Table.Td>
                            <p className="text-right text-slate-600 text-base font-secondary">${userData.amount.toFixed(2)}</p>
                        </Table.Td>
                        <Table.Td>
                            <span className="right-0">
                                <img src={userData.icon} alt="left icon" className="h-3 w-auto" />
                            </span>
                        </Table.Td>
                    </Table.Tr>
                )}
            </Table>
        </div>
    );
};

export default Transactable;