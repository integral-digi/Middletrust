"use client"
import { Tab } from "@headlessui/react";
import AllTransactions from "./components/AllTransactions";
import SideNav from "@/components/dashcomps/SideNav";
import TopBarTwo from "@/components/dashcomps/TopbarTwo";

const TransactHome = () => {
    const tabStyle = "ui-selected:border-b-4 ui-selected:border-indigo-500 font-primary";
    return (
        <div className="w-full h-full dark:bg-[#1E1A1A] dark:text-white lg:w-fit relative">
            <div className="lg:hidden">
                <SideNav />
            </div>
            <div className="mx-auto py-6 w-[64%] lg:w-full lg:px-8">
                <div className="top-0 py-6 w-full">
                    <TopBarTwo currentTitle="Transactions" />
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
                        <hr className="w-full h-px bg-neutral-100" />
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