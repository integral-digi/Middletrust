"use client"
import { Tab } from "@headlessui/react";
import SideNav from "@/app/dashboard/components/SideNav";
import TopBarTwo from "@/app/dashboard/components/TopbarTwo";
import PersonalSettings from "./AccComps/Personal";

const AccHome = () => {
    const tabStyle = "px-2 py-1 h-12 text-slate-600 ui-selected:bg-white font-secondary ui-selected:text-black ui-selected:rounded-md ui-selected:px-4 ui-selected:dark:bg-[#1E1A1A] ui-selected:dark:text-cyan-400 dark:text-white";
    return (
        <div className="w-full dark:bg-[#1E1A1A] dark:text-white xl:w-fit relative h-full min-h-screen">
            <div className="xl:hidden">
                <SideNav />
            </div>
            <div className="mx-auto py-6 w-[64%] xl:w-full xl:px-8">
                <div className="top-0 py-6 w-full">
                    <TopBarTwo currentTitle="account" />
                </div>
                <div className="block pt-8 space-y-24 w-full">
                <Tab.Group>
                <Tab.List className="w-full flex items-center justify-between py-1 px-2 rounded-md bg-neutral-100 dark:bg-stone-900 h-[72px]">
                    <Tab className={tabStyle}>
                         Personal Info
                    </Tab>
                    <Tab className={tabStyle}>Bank Details</Tab>
                    <Tab className={tabStyle}>Security Settings</Tab>
                    <Tab className={tabStyle}>Documents</Tab>
                    <Tab className={tabStyle}>Security Logs</Tab>
                    <Tab className={tabStyle}>API Details</Tab>
                </Tab.List>
                <Tab.Panels className="font-secondary w-full pt-6 sm:mx-auto sm:w-[338px] pr-8">
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                    <Tab.Panel>
                        <PersonalSettings />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
                    
                </div>
            </div>
        </div>
    );
}

export default AccHome;
