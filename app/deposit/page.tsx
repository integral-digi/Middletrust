// DepHome component
"use client"
import { useState } from "react";
import SideNav from "@/app/dashboard/components/SideNav";
import TopBarTwo from "@/app/dashboard/components/TopbarTwo";
import DepSideBar from "./components/DepSideBar";
import DepositForm from "./components/Form";

const DepHome = () => {
  const [depositAmt, setDepositAmt] = useState(0);

  return (
    <div className="w-full dark:bg-[#1E1A1A] dark:text-white xl:w-fit relative h-full">
      <div className="xl:hidden">
        <SideNav />
      </div>
      <div className="mx-auto py-6 w-[64%] xl:w-full xl:px-8">
        <div className="top-0 py-6 w-full">
          <TopBarTwo currentTitle="deposit" />
        </div>
        <div className="mt-24 grid grid-cols-2 gap-[20%] justify-between w-full xl:space-y-24 xl:block">
          <div className="block space-y-24 w-full">
            <DepositForm depositAmt={depositAmt} setDepositAmt={setDepositAmt} />
          </div>
          <div className="block w-full">
            <DepSideBar depositAmt={depositAmt} setDepositAmt={setDepositAmt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepHome;
