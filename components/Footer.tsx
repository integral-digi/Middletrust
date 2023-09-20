import Link from "next/link";
import { motion } from "framer-motion";

interface FooterData {
    label: string;
    href: string;
}

interface SocialData extends FooterData {
    icon: string;
}

const Footer = () => {
    const infoMessage: string = "Don't let fraudsters ruin your online transactions. Sign up for Middletrust today and experience the peace of mind that comes with using a trusted escrow service.";

    const footerLinks: FooterData[][] = [
        [
            { label: "Trust for Sellers", href: "#" },
            { label: "Trust for Loans", href: "#" },
            { label: "Trust Link", href: "#" },
            { label: "Pricing", href: "#" }
        ],
        [
            { label: "Help Center", href: "#" },
            { label: "Partners", href: "#" },
            { label: "Documentation", href: "#" },
            { label: "Status", href: "#" }
        ],
        [
            { label: "About", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Contact us", href: "#" },
        ]
    ];

    const socialLinks: SocialData[] = [
        { label: "X", href: "https://x.com/middletrusthq", icon: "/images/X.svg" },
        { label: "Facebook", href: "https://facebook.com/middletrust", icon: "/images/facebook.svg" },
        { label: "Instagram", href: "https://instagram.com/middletrusthq", icon: "/images/instagram.svg" },
        { label: "Youtube", href: "https://youtube.com/middletrust", icon: "/images/youtube.svg" },
        { label: "Medium", href: "https://medium.com/@middletrust", icon: "/images/medium.svg" },
        { label: "Github", href: "https://github.com/middletrust", icon: "/images/github.svg" },
        { label: "Linkedin", href: "https://linkedin.com/company/middletrust", icon: "/images/linkedin.svg" }
    ];

    const copyright: string = "© 2023 Middletrust LLC. All rights reserved.";

    return (
        <footer className="w-full dark:bg-[#1E1A1A] h-[auto] py-24 lg:px-8 lg:bg-clip-content">
            <motion.div className="mx-auto max-w-6xl">
                <div className="flex gap-[20%] w-full lg:block lg:space-y-16">
                    <div className="w-[35%] text-slate-600 dark:text-white text-[15px] font-primary leading-normal lg:block lg:w-[90%]">
                        {infoMessage}
                    </div>
                    <div className="w-[45%] space-y-5 lg:w-[100%]">
                        <h1 className="w-max text-slate-600 dark:text-white text-xl font-primary leading-normal lg:w-[100%] lg:text-2xl">Follow our socials</h1>
                        {socialLinks.map((social) => (
                            <div className="w-[50px] h-[50px] justify-evenly space-x-4 hover:bg-white bg-neutral-100 rounded-[10px] flex-col inline-flex lg:h-10 lg:w-10">
                                <Link key={social.label} href={social.href} className="">
                                    <img className="w-[18px] h-[18px] mx-auto lg:h-4 lg:w-4" src={social.icon} alt={social.label} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-16 justify-between">
                    <div className="flex w-full gap-[20%] lg:block lg:space-y-12">
                        <div className="relative w-[30%] lg:w-[100%]">
                            <h1 className="w-max pb-9 text-slate-600 dark:text-white text-xl font-primary leading-normal lg:w-[100%] lg:text-2xl">
                                Stay in the loop
                            </h1>
                            <input id="email_submit" type="email" placeholder="Email here..." className=" caret-slate-500 focus:outline-dashed pl-[36px] w-[100%] h-[50px] bg-neutral-100 rounded-[10px] lg:w-[90%] dark:bg-stone-900"/>
                        </div>
                        <div className="grid grid-cols-3 w-[50%] gap-20 lg:w-[100%] lg:grid lg:grid-cols-2">
                            <div className="space-y-9">
                                <h1 className="text-xl font-primary text-slate-600 dark:text-neutral-200">Solutions</h1>
                                {footerLinks[0].map((child, index)=>(
                                    <Link key={index} href={child.href} className="w-max block dark:text-white">{child.label}</Link>
                                ))}
                            </div>
                            <div className="space-y-9">
                                <h1 className="text-xl font-primary text-slate-600 dark:text-neutral-200">Resources</h1>
                                {footerLinks[1].map((child, index)=>(
                                    <Link key={index} href={child.href} className="w-max block dark:text-white">{child.label}</Link>
                                ))}  
                            </div>
                            <div className="space-y-9">
                                <h1 className="text-xl font-primary text-slate-600 dark:text-neutral-200">Company</h1>
                                {footerLinks[2].map((child, index)=>(
                                    <Link key={index} href={child.href} className="w-max block dark:text-white">{child.label}</Link>
                                ))} 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full h-6 relative pt-16">
                    <div className="text-slate-600 whitespace-nowrap dark:text-white text-base w-1/2 font-primary leading-normal">
                        {copyright}
                    </div>
                    <div className="w-1/2 inline-flex text-right text-neutral-400 text-base dark:bg-stone-900 dark:text-white leading-normal lg:hidden">
                        <Link href="#">
                            <p className="justify-items-end text-right">Privacy Policy</p>
                        </Link>
                        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                        <Link href="#">
                            <p className="justify-items-end text-right">Terms of Service</p>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
