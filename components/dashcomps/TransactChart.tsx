"use client"
import { RadialBarChart, RadialBar, Legend } from "recharts";

interface SummaryDataProps {
    name:string;
    amount: number;
    fill: string;
    styles: string;
};
const transactionTotal = 59485;

const summaryData: SummaryDataProps[] = [
    {name: "Total Inflows", amount: 43234, fill: "#6A5ACD", styles: "w-1 h-1 rounded-full bg-[#6A5ACD]"},
    {name: "Withdrawals", amount: 22125, fill: "#0BB5FA", styles: "w-1 h-1 rounded-full bg-[#0BB5FA]"},
    {name: "Total Outflows", amount: 11379, fill: "#0BB5FA", styles: "w-1 h-1 rounded-full bg-[#0BB5FA]"}
];

const textStyle = [
    "text-slate-600 text-xs font-primary leading-tight",
    "text-slate-600 text-opacity-50 text-xs font-secondary leading-tight"
];

const DashChart = () => {
    return (
        <div className="w-full space-y-12 relative">
            <h3 className="text-slate-600 dark:text-white text-xl font-secondary tracking-tight">
                Transaction Stats
            </h3>
            <div className="left-0 flex items-center space-x-0">
                <RadialBarChart
                    width={500}
                    height={248}
                    cx={128}
                    cy={128}
                    innerRadius={64}
                    outerRadius={120}
                    barSize={10}
                    data={summaryData}
                >      
                    <RadialBar
                        background
                        dataKey="amount"
                    />
                </RadialBarChart>
                {/* <div className="">
                    {summaryData.map((item, index) => (
                        <div className="space-y-5">
                            <div className="flex space-x-2">
                                <span key={index} className={item.styles}></span>
                                <span className="block">
                                    <p className={textStyle[0]}>{item.name}</p>
                                    <p className={textStyle[1]}>{item.amount}</p>
                                </span>
                            <div>
                        </div>
                    ))}
                </div> */}
                <div className="my-auto left-[92px] mx-auto absolute">
                    <p className="w-max h-9 text-center text-slate-600 dark:text-white text-xl font-primary leading-loose">
                        ${transactionTotal}
                    </p>
                    <p className="w-max text-center text-slate-600 dark:text-white text-sm leading-normal">
                        Transactions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashChart;