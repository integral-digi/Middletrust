// DepHome component
"use client"
import { useState } from "react";
import SideNav from "@/components/dashcomps/SideNav";
import TopBarTwo from "@/components/dashcomps/TopbarTwo";
import DepSideBar from "./components/DepSideBar";
import DepositForm from "./components/Form";

const DepHome = () => {
  const [depositAmt, setDepositAmt] = useState(0);

  return (
    <div className="w-full dark:bg-[#1E1A1A] dark:text-white lg:w-fit relative h-full">
      <div className="lg:hidden">
        <SideNav />
      </div>
      <div className="mx-auto py-6 w-[64%] lg:w-full lg:px-8">
        <div className="top-0 py-6 w-full">
          <TopBarTwo currentTitle="Deposit" />
        </div>
        <div className="mt-24 grid grid-cols-2 gap-[20%] justify-between w-full lg:space-y-24 lg:block">
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
