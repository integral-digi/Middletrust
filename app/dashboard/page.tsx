"use client"
import AccBalance from "@/components/dashcomps/Balance";
import BalanceAndLimits from "@/components/dashcomps/Balances";
import BottomNav from "@/components/dashcomps/DashMobNav";
import Quicklinks from "@/components/dashcomps/Quicklinks";
import SideNav from "@/components/dashcomps/SideNav";
import TopBar from "@/components/dashcomps/TopBar";
import DashChart from "@/components/dashcomps/TransactChart";
import Transactable from "@/components/dashcomps/Transactable";
import DashContact from "@/components/dashcomps/UserContacts";

const DashHome = () => {
    return (
        <div className="w-full dark:bg-[#1E1A1A] dark:text-white lg:w-fit">
            <div className="lg:hidden">
                <SideNav />
            </div>
            <div className="mx-auto relative py-6 w-fit lg:w-full lg:px-8">
                <div className="top-0 py-6 w-full">
                    <TopBar />
                </div>
                <div className="mt-24 grid grid-cols-2 justify-between gap-[20%] w-full lg:space-y-24 lg:block">
                    <div className="block space-y-24 w-fit">
                        <div className="space-y-12">
                            <AccBalance />
                            <BalanceAndLimits />
                        </div>
                        <Transactable />
                    </div>
                    <div className="space-y-12 w-fit lg:w-full">
                        <DashChart />
                        <DashContact />
                        <Quicklinks />
                    </div>
                <div className="absolute hidden shadow lg:block">
                    <BottomNav />
                </div>
                </div>
            </div>
        </div>
    );
};

export default DashHome;