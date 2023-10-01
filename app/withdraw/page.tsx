"use client"
import SideNav from "@/components/dashcomps/SideNav";
import WithdrawForm from "./withcomps/Form";
import TopBarTwo from "@/components/dashcomps/TopbarTwo";

const WithdrawHome = () => {
  return (
    <div className="h-full mx-auto relative py-6 w-fit lg:w-full lg:px-8 dark:bg-stone-900 bg-white dark:dark:bg-[#1E1A1A]">
      <div className="lg:hidden">
        <SideNav />
      </div>
      <div className="top-0 py-6 w-full">
        <TopBarTwo currentTitle="Withdraw" />
      </div>
      <div className="mt-24 grid grid-cols-2 justify-between gap-[20%] w-full lg:space-y-24 lg:block">
        <div className="block space-y-24">
          <WithdrawForm />
        </div>
      </div>
    </div>
  );
};

export default WithdrawHome;
