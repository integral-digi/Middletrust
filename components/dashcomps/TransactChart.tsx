"use client"
import { RadialBarChart, RadialBar, Legend } from "recharts";

interface SummaryDataProps {
    name:string;
    amount: number;
    fill: string;
};

const summaryData: SummaryDataProps[] = [
    {name: "Total Inflows", amount: 43234, fill: "#6A5ACD"},
    {name: "Withdrawals", amount: 22125, fill: "#0BB5FA"},
    {name: "Total Outflows", amount: 11379, fill: "#1AC6FF"}
];

const DashChart = () => {
    return (
        <div className="relative">
            <RadialBarChart
                width={500}
                height={300}
                cx={150}
                cy={150}
                innerRadius={20}
                outerRadius={140}
                barSize={10}
                data={summaryData}
            >      
                <RadialBar
                    background
                    dataKey="amount"
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    className="absolute left-8"
                />
            </RadialBarChart>
        </div>
    )
};

export default DashChart;