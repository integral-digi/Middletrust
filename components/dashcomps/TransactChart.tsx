"use client"
import { RadialBarChart, RadialBar, Legend } from "recharts";

interface SummaryDataProps {
    name:string;
    amount: number;
    fill: string;
};
const transactionTotal = 59485;

const summaryData: SummaryDataProps[] = [
    {name: "Total Inflows", amount: 43234, fill: "#6A5ACD"},
    {name: "Withdrawals", amount: 22125, fill: "#0BB5FA"},
    {name: "Total Outflows", amount: 11379, fill: "#1AC6FF"}
];

const DashChart = () => {
    return (
        <div className="w-full space-y-12 relative">
            <h3 className="text-slate-600 text-xl font-secondary tracking-tight">
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
                <div className="my-auto left-[88px] mx-auto absolute">
                    <p className="w-max h-9 text-center text-slate-600 text-xl font-primary leading-loose">
                        ${transactionTotal}
                    </p>
                    <p className="w-max text-center text-slate-600 text-sm leading-normal">
                        Transactions
                    </p>
                </div>
            </div>
        </div>
    )
};

export default DashChart;