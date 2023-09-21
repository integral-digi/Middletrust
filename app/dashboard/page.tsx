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
        <body className="space-y-24 w-full">
            <div className="absolute left-0 top-0 h-screen">
                <SideNav />
            </div>
            <div className="top-0">
                <TopBar />
            </div>
            <div className="grid grid-cols-2">
                <div className="block space-y-24">
                    <div className="space-y-12">
                        <AccBalance />
                        <BalanceAndLimits />
                    </div>
                    <Transactable />
                </div>
                <div className="space-y-12">
                    <DashChart />
                    <DashContact />
                    <Quicklinks />
                </div>
            </div>
        </body>
    );
};

export default DashHome;