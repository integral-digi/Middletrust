"use client"
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface DataProps {
    id: number;
    name: string;
    icon: string;
}

const quickInfo: DataProps[] = [
    {id: 1, name: "Withdraw", icon: "/assets/midicon.svg"},
    {id: 2, name: "Tutorials", icon: "/assets/midicon.svg"},
    {id: 3, name: "Support", icon: "/assets/midicon.svg"}
];

const Quicklinks = () => {
    return (
        <div className="w-full h-max relative space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-slate-600 dark:text-white text-xl font-secondary tracking-tight">
                    Quicklinks
                </h3>
                <span className="w-4 h-4">
                    <ChevronRightIcon />
                </span>
            </div>
            <hr className="w-full h-0.5 bg-neutral-100" />
            <div className="flex space-x-3 xl:overflow-x-scroll scrollbar-hide w-full">
                {quickInfo.map((singleInfo) => (
                    <Link href={`/${singleInfo.name.toLowerCase()}`} key={singleInfo.id} className="w-[40%]">
                        <div className={`cursor-pointer space-y-20 pl-4 pr-12 py-8 w-full h-full rounded-2xl ${singleInfo.id === 2 ? "bg-indigo-500 text-white" : "bg-neutral-100 text-slate-600"}`}>
                            <p className="text-xl font-secondary">
                                {singleInfo.name}
                            </p>
                            <img 
                                src={singleInfo.icon} 
                                className="w-9 h-8 relative" 
                                alt={`${singleInfo.name} icon`} 
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Quicklinks;
