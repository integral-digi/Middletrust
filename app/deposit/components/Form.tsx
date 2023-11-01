
"use client"
import { useState } from "react";

const DepositForm = ({ depositAmt, setDepositAmt }: any) => {
  const [localDepositAmt, setLocalDepositAmt] = useState(depositAmt);

  const handleChange = (event: any) => {
    setLocalDepositAmt(event.target.value);
    setDepositAmt(event.target.value); // Pass the updated state to the parent component
  };

  const currencies = { naira: "₦", dollar: "$" };

  return (
    <div className="w-full h-full space-y-24 dark:bg-[#1E1A1A]">
      <div className="flex items-center w-full space-x-7">
        <span className="">
          <p className="dark:text-white text-slate-600 text-2xl font-black">
            {currencies.dollar}
          </p>
        </span>
        <input
          type="number"
          value={localDepositAmt}
          onChange={handleChange}
          className="w-full dark:text-white bg-transparent border-none text-slate-600 text-5xl font-black focus:outline-none selection:outline-none focus:border-none"
        />
      </div>
      <button
        id="withdrawal"
        className="w-full px-8 h-20 bg-transparent rounded-lg border-2 border-gray-300"
      >
        <p className="text-center dark:text-white text-slate-600 text-base font-secondary">
          Select Payment Method
        </p>
      </button>
    </div>
  );
};

export default DepositForm;
