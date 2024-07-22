"use client"
import AccBalance from "@/app/dashboard/components/Balance";
import BalanceAndLimits from "@/app/dashboard/components/Balances";
import BottomNav from "@/app/dashboard/components/DashMobNav";
import Quicklinks from "@/app/dashboard/components/Quicklinks";
import SideNav from "@/app/dashboard/components/SideNav";
import TopBar from "@/app/dashboard/components/TopBar";
import DashChart from "@/app/dashboard/components/TransactChart";
import Transactable from "@/app/dashboard/components/Transactable";
import DashContact from "@/app/dashboard/components/UserContacts";

const DashHome = () => {
    return (
        <div className="w-full dark:bg-[#1E1A1A] dark:text-white xl:w-full relative">
            <div className="flex justify-center items-center">
                <div className="pt-4 pb-32 w-fit xl:w-full px-16 xl:px-8">
                    <div className="top-0 py-6 w-full">
                        <TopBar />
                    </div>
                    <div className="w-fit flex justify-between items-start xl:w-full xl:space-y-12 xl:flex-col xl:space-x-0">
                        <div className="xl:hidden">
                            <SideNav />
                        </div>
                        <div className="w-full flex lg:flex-col space-x-36 xl:space-x-0 xl:space-y-14">
                            <div className="space-y-14 w-fit xl:w-full">
                                <div className="space-y-14 w-full">
                                    <AccBalance />
                                    <BalanceAndLimits />
                                </div>
                                <Transactable />
                            </div>
                            <div className="space-y-14 w-full">
                                <DashChart />
                                <DashContact />
                                <Quicklinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full hidden shadow xl:block">
                <BottomNav />
            </div>
        </div>
    );
};

export default DashHome;