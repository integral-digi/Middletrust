import { formattedCurr } from "@/components/dashcomps/Balances";

interface userInfoProps {
    name: string;
    bank: string;
    accNum: number;
    routing: number;
}

const userInfo: userInfoProps = {
    name: "Efe O",
    bank: "Silvergate Bank",
    accNum: 7787778877,
    routing: 60779018,
};

const withdrawLabels: string[] = [
    "Amount to Withdraw",
    "Bank",
    "Account Number",
    "Account Name",
    "Routing Number",
    "Service Charge"
];

const withdrawAmt = 300;

const serviceCharge: number = 0;




const InfoBar = () => {
    const pStyle: string = "text-slate-600 text-base font-primary dark:text-white";
    const pStyleTwo: string = "text-right text-slate-600 text-base font-secondary dark:text-white";

   return (
    <div className="w-full space-y-12">
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[0]}</p>
            <p className={pStyleTwo}>{formattedCurr(withdrawAmt)}</p>
        </span>
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[1]}</p>
            <p className={pStyleTwo}>{userInfo.name}</p>
        </span>
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[2]}</p>
            <p className={pStyleTwo}>{userInfo.bank}</p>
        </span>
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[3]}</p>
            <p className={pStyleTwo}>{userInfo.accNum}</p>
        </span>
        <span className="flex items-center justify-between">
            <p className={pStyle}>{withdrawLabels[4]}</p>
            <p className={pStyleTwo}>{userInfo.routing}</p>
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

export default InfoBar;