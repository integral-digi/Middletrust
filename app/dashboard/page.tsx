"use client"
import AccBalance from "@/components/dashcomps/Balance";
import BalanceAndLimits from "@/components/dashcomps/Balances";
import Quicklinks from "@/components/dashcomps/Quicklinks";
import SideNav from "@/components/dashcomps/SideNav";
import TopBar from "@/components/dashcomps/TopBar";
import DashChart from "@/components/dashcomps/TransactChart";
import Transactable from "@/components/dashcomps/Transactable";
import DashContact from "@/components/dashcomps/UserContacts";

const DashHome = () => {
    return (
        <body className="w-full dark:bg-[#1E1A1A] dark:text-white">
            <div className="">
                <SideNav />
            </div>
            <div className="mx-auto py-6 w-fit">
                <div className="top-0 py-6 w-full">
                    <TopBar />
                </div>
                <div className="mt-24 grid grid-cols-2 justify-between gap-[20%] w-full">
                    <div className="block space-y-24 w-fit">
                        <div className="space-y-12">
                            <AccBalance />
                            <BalanceAndLimits />
                        </div>
                        <Transactable />
                    </div>
                    <div className="space-y-12 w-fit">
                        <DashChart />
                        <DashContact />
                        <Quicklinks />
                    </div>
                </div>
            </div>
        </body>
    );
};

export default DashHome;