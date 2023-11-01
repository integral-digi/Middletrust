import { RadialBarChart, RadialBar } from "recharts";
import { formattedCurr } from "./Balances";
import ChartDropdown from "./Listbox";

interface SummaryDataProps {
    name: string;
    amount: number;
    fill: string;
};

const transactionTotal: number = 59485;

const summaryData: SummaryDataProps[] = [
    { name: "Total Inflows", amount: 43234, fill: "#6A5ACD" },
    { name: "Withdrawals", amount: 4872, fill: "#0BB5FA" },
    { name: "Total Outflows", amount: 11379, fill: "#0BB5FA" },
];

const textStyle = "text-slate-600 dark:text-white text-xs font-primary leading-tight";

const DashChart = () => {
    return (
        <div className="w-full space-y-8 relative">
            <div className="flex items-center justify-between">
                <h3 className="text-slate-600 dark:text-white text-xl font-secondary tracking-tight">
                    Transaction Stats
                </h3>
                <div>
                    <ChartDropdown />
                </div>
            </div>
            <div className="left-0 flex items-center justify-between space-x-0">
                <RadialBarChart
                    width={240}
                    height={240}
                    cx={128}
                    cy={128}
                    innerRadius={64}
                    outerRadius={120}
                    barSize={10}
                    data={summaryData}
                >
                    <RadialBar background dataKey="amount" />
                </RadialBarChart>
                <div className="w-max">
                    {summaryData.map((item, index) => (
                        <div className="space-y-5" key={index}>
                            <div className="flex space-x-2 py-1">
                                <span className={`w-2 h-2 rounded-full bg-[${item.fill}]`} />
                                <span className="block">
                                    <p className={textStyle}>{item.name}</p>
                                    <p className={`${textStyle} opacity-50`}>{formattedCurr(item.amount)}</p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
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