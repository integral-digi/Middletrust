import { formattedCurr } from "@/app/dashboard/components/Balances";

const withdrawLabels: string[] = [
    "Amount to Deposit",
    "Method",
    "Account Number",
    "Account Name",
    "Routing Number",
    "Service Charge"
];


const serviceCharge: number = 0;

const DepSideBar = ({depositAmt, setDepositAmt}: any) => {
    const pStyle: string = "text-slate-600 text-base font-primary dark:text-white";
    const pStyleTwo: string = "text-right text-slate-600 text-base font-secondary dark:text-white";

   return (
    <div className="w-full space-y-12 h-screen">
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[0]}</p>
            <p className={pStyleTwo}>{formattedCurr(depositAmt)}</p>
        </span>
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[1]}</p>
            <p className={pStyleTwo}>Wire Transfer</p>
        </span>
        <hr className="w-full h-px bg-zinc-300" />
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[5]}</p>
            <p className={pStyleTwo}>{serviceCharge}</p>
        </span>
        <div className="pt-16">
            <button className="h-12 w-full bg-indigo-500 rounded-lg justify-center flex items-center">
                <p className="w-max text-center text-white text-base font-black">Continue</p>
            </button>
        </div>
    </div>

   )
};

export default DepSideBar;