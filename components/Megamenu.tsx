import { Popover } from "@headlessui/react";
import Link from "next/link";

export interface menuChildren {
    name: string;
    info: string;
    icon: string;
    href: string
}

const midFor: menuChildren[][] = [
    //  menu details obtained from figma...
    [
        {name: "Buyers", info: "Escrow for clients, online shoppers who need payment protection in their dealings.", icon: "/assets/buyers.svg", href: "#"},
        {name: "Sellers", info: "Escrow for freelancers, online sellers, and marketplaces.", icon: "/assets/sellers.svg", href: "#"},
        {name: "Loans", info: "Escrow for peer to peer loans. Lend the smarter way.", icon: "/assets/loans.svg", href: "#"},
        {name: "Developers", info: "Robust Escrow Payment API for developers and forward-thinking companies.", icon: "/assets/developers.svg", href: "#"}
    ],
    [
        {name: "Multi-Phase Transactions", info: "Payments split and paid in multiple phases provided set milestones are met.", icon: "/assets/multiphase.svg", href: "#"},
        {name: "Trust Link", info: "Get your unique store link and create a trustworthy e-commerce presence online.", icon: "/assets/trustlink.svg", href: "#"},
        {name: "AI Assistant", info: "Set up simple and complex transactions quickly with your personal AI assistant. ", icon: "/assets/ai.svg", href: "#"},
        {name: "Cross-Border Support", info: "Transact without border restrictions, and get your payments in USD.", icon: "/assets/crossborder.svg", href: "#"}      
    ]
];

const firstTitle: string = "middletrust for";
const secondTitle: string = "features";

const FlyOutMenuOne = () => {
    return (
        <div className="w-full grid grid-cols-2 shadow-[rgba(15, 11, 36, 0.15)] xl:block xl:w-full">
            <div className="bg-white dark:bg-[#1E1A1A] dark:text-white">
                <div className="px-14 pt-9 pb-[80px] space-y-11 xl:px-8">
                    <div>
                        <h1 className="text-left text-slate-500 dark:text-white text-xs font-secondary">{firstTitle.toUpperCase()}</h1>
                    </div>
                    {midFor[0].map((child, index) => (
                        <div className='flex space-x-6' key={index}>
                            <div className="w-12 h-12 bg-neutral-100 dark:bg-stone-900 rounded-[5px] justify-evenly flex items-center">
                                <img src={child.icon} alt={child.name} className="mx-auto" />
                            </div>
                            <Link href={child.href} className="space-y-1">
                                <h3 className="text-slate-600 dark:text-white text-base font-secondary">{child.name}</h3>
                                <p className="w-[248px] text-slate-500 text-xs font-book dark:text-neutral-200">{child.info}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-neutral-100 dark:bg-stone-900 dark:text-white">
                <div className="px-14 pt-9 pb-[80px] space-y-11 xl:px-8 xl:w-screen">
                    <div>
                        <h1 className="text-left text-slate-500 dark:text-white text-xs font-secondary">
                            {secondTitle.toUpperCase()}
                        </h1>
                    </div>
                {midFor[1].map((child, index) => (
                    <div className='flex space-x-6' key={index}>
                        <div className="w-12 h-12 bg-white dark:bg-[#1E1A1A] rounded-[5px] justify-evenly flex items-center">
                            <img src={child.icon} alt={child.name} className="mx-auto" />
                        </div>
                        <Link href={child.href} className="space-y-1">
                            <h3 className="text-slate-600 dark:text-white text-base font-secondary">
                                {child.name}
                            </h3>
                            <p className="w-[248px] text-slate-500 text-xs font-book dark:text-neutral-200">{child.info}</p>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default FlyOutMenuOne;