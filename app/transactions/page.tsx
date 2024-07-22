"use client"
import { Tab } from "@headlessui/react";
import AllTransactions from "./components/AllTransactions";
import SideNav from "@/app/dashboard/components/SideNav";
import TopBarTwo from "@/app/dashboard/components/TopbarTwo";

const TransactHome = () => {
    const tabStyle = "ui-selected:border-b-4 ui-selected:border-slate-500 font-primary";
    return (
        <div className="w-full h-full dark:bg-[#1E1A1A] min-h-screen dark:text-white xl:w-fit relative">
            <div className="xl:hidden">
                <SideNav />
            </div>
            <div className="mx-auto py-6 w-[64%] xl:w-full xl:px-8">
                <div className="top-0 py-6 w-full">
                    <TopBarTwo currentTitle="transactions" />
                </div>
                <div className="w-full mt-24">
                    <Tab.Group>
                        <Tab.List className="flex items-center space-x-12">
                            <Tab className={tabStyle}>
                                All Transactions
                            </Tab>
                            <Tab className={tabStyle}>
                                Disputes
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="pt-10">
                            <Tab.Panel>
                                <AllTransactions />
                            </Tab.Panel>
                            <Tab.Panel>
                                <AllTransactions />
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}

export default TransactHome;