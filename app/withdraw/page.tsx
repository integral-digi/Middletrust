"use client"
import SideNav from "@/app/dashboard/components/SideNav";
import WithdrawForm from "./withcomps/Form";
import TopBarTwo from "@/app/dashboard/components/TopbarTwo";

const WithdrawHome = () => {
  return (
    <div className="w-full dark:bg-[#1E1A1A] dark:text-white xl:w-fit relative h-full">
      <div className="xl:hidden">
        <SideNav />
      </div>
      <div className="mx-auto py-6 w-[64%] xl:w-full xl:px-8">
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