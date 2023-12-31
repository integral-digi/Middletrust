"use client"
import SideNav from "@/components/dashcomps/SideNav";
import WithdrawForm from "./withcomps/Form";
import TopBarTwo from "@/components/dashcomps/TopbarTwo";

const WithdrawHome = () => {
  return (
    <div className="w-full dark:bg-[#1E1A1A] dark:text-white lg:w-fit relative h-full">
      <div className="lg:hidden">
        <SideNav />
      </div>
      <div className="mx-auto py-6 w-[64%] lg:w-full lg:px-8">
        <div className="top-0 py-6 w-full">
          <TopBarTwo currentTitle="withdraw" />
        </div>
        <div className="block space-y-24 w-full">
          <WithdrawForm  />
        </div>
      </div>
    </div>
  );
}

export default WithdrawHome;