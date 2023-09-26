import { useState } from "react";
import { formattedCurr } from "./Balances";

const AccBalance = () => {
  const balance: number = 5206;
  const cardNum: number = 5595;

  const [showBalance, setShowBalance] = useState(true);

  const handleClick = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="bg-indigo-500 w-[100%] h-60 rounded-2xl">
      <div className="py-6 px-9">
        <span className="w-full flex items-center justify-between">
          <p className="text-white text-xs font-primary leading-tight">
            Available Balance
          </p>
          <button onClick={handleClick}>
            <img src="eye.svg" alt="view-close" className="w-6 h-6" />
          </button>
        </span>
        <span>
          {showBalance ? (
            <p className="mt-12 text-white text-5xl font-black">{formattedCurr(balance)}</p>
          ) : (
            <p className="mt-12 text-white text-5xl font-black">*****</p>
          )}
        </span>
        <span className="w-full flex items-center justify-between mt-5">
          <p className="text-white text-base font-primary">**** {cardNum}</p>
          <img src="mc.svg" alt="card number" className="w-12 h-8 relative" />
        </span>
      </div>
    </div>
  );
};

export default AccBalance;