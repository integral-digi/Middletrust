import Link from "next/link";
import { menuChildren } from "./Megamenu";



const midFor: menuChildren[][] = [
    //  menu details obtained from figma...
    [
        {name: "Sellfy", info: "Escrow payments now available for your Sellfy powered website.", icon: "sellfyicon.svg", href: "#"},
        {name: "Woocommerce", info: "Escrow payment now available in your favorite e-commerce platform.", icon: "woocommerce.svg", href: "#"},
        {name: "Bumpa", info: "Secured escrow payments for Bumpa and Bumpreneurs.", icon: "bumpicon.svg", href: "#"},
        {name: "Shopify", info: "Escrow payment ready to plug into your Shopify store.", icon: "shopify.svg", href: "#"}
    ],
    [
        {name: "Jiji", info: "Confidently buy or sell on Nigeria's largest online marketplace.", icon: "jiji.png", href: "#"},
        {name: "Konga", info: "Can't find the Pay on Delivery option? Use Middletrust instead.", icon: "kg.svg", href: "#"},
        {name: "Facebook Marketplace", info: "Ready to go payment option on Facebook Marketplace.", icon: "fb.svg", href: "#"},
        {name: "Whatsapp", info: "Explore a more secure way to pay that vendor on Whatsapp.", icon: "whatsapp.svg", href: "#"}      
    ]
];

const firstTitle: string = "PLUGINS & APPS";
const secondTitle: string = "READY-TO-GO INTEGRATIONS";

const IntegrationMenu = () => {
    return (
        <div className="w-full grid grid-cols-2 shadow-[rgba(15, 11, 36, 0.15)] lg:block lg:w-screen">
            <div className="bg-white dark:bg-[#1E1A1A] dark:text-white">
                <div className="px-14 pt-9 pb-[80px] space-y-11 lg:px-8">
                    <div>
                        <h1 className="text-left text-slate-500 dark:text-white text-xs font-secondary">{firstTitle.toUpperCase()}</h1>
                    </div>
                    {midFor[0].map((child, index) => (
                        <div className='flex space-x-4' key={index}>
                            <div className="w-12 h-12 bg-neutral-100 dark:bg-stone-900 rounded-[5px] justify-evenly flex items-center">
                                <img src={child.icon} alt={child.name} className="mx-auto" />
                            </div>
                            <Link href={child.href} className="space-y-1">
                                <h3 className="text-slate-600 dark:text-white text-base font-secondary">{child.name}</h3>
                                <p className="w-[248px] text-slate-500 text-xs font-book">{child.info}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-neutral-100 dark:bg-stone-900 dark:text-white">
                <div className="px-14 pt-9 pb-[80px] space-y-11 lg:px-8">
                    <div>
                        <h1 className="text-left text-slate-500 dark:text-white text-xs font-secondary">{secondTitle.toUpperCase()}</h1>
                    </div>
                {midFor[1].map((child, index) => (
                    <div className='flex space-x-4' key={index}>
                        <div className="w-12 h-12 bg-white dark:bg-[#1E1A1A] rounded-[5px] justify-evenly flex items-center">
                            <img src={child.icon} alt={child.name} className="mx-auto" />
                        </div>
                        <Link href={child.href} className="space-y-1">
                            <h3 className="text-slate-600 dark:text-white text-base font-secondary">{child.name}</h3>
                            <p className="w-[248px] text-slate-500 text-xs font-book">{child.info}</p>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default IntegrationMenu;