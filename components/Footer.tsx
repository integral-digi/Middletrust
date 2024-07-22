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
        { label: "X", href: "https://x.com/middletrusthq", icon: "/images/x.svg" },
        { label: "Facebook", href: "https://facebook.com/middletrust", icon: "/images/facebook.svg" },
        { label: "Instagram", href: "https://instagram.com/middletrusthq", icon: "/images/instagram.svg" },
        { label: "Youtube", href: "https://youtube.com/middletrust", icon: "/images/youtube.svg" },
        { label: "Medium", href: "https://medium.com/@middletrust", icon: "/images/medium.svg" },
        { label: "Github", href: "https://github.com/middletrust", icon: "/images/github.svg" },
        { label: "Linkedin", href: "https://linkedin.com/company/middletrust", icon: "/images/linkedin.svg" }
    ];

    const copyright: string = "© 2024 Middletrust LLC. All rights reserved.";

    return (
        <footer className="w-full dark:bg-[#1E1A1A] h-fit p-24 xl:px-8 space-y-12">
            <motion.div className="w-full flex justify-between xl:flex-col space-y-16">
                <div className="w-[35%] flex flex-col space-y-12 xl:w-full xl:flex-col">
                    <div className="text-slate-600 dark:text-white text-base font-primary leading-normal xl:block xl:w-[90%]">
                        {infoMessage}
                    </div>
                    <div className="w-full space-y-8 xl:w-full">
                        <h1 className="w-full text-slate-600 dark:text-white text-xl font-primary leading-normal xl:w-full xl:text-2xl">
                            Stay in the loop
                        </h1>
                        <input 
                            id="email_submit" 
                            type="email" 
                            placeholder="Email here..." 
                            className=" caret-slate-500 focus:outline-dashed pl-9 w-full h-12 bg-neutral-100 rounded-xl xl:w-full placeholder:dark:text-white/80 dark:bg-stone-900"
                        />
                    </div>
                </div>
                <div className="w-[55%] xl:w-full">
                    <div className="flex flex-col items-start space-y-12 xl:w-full xl:flex-col xl:space-y-16">
                        <div className="w-fit space-y-6 xl:w-full">
                            <h1 className="w-fit text-slate-600 dark:text-white text-xl font-primary leading-normal xl:w-full xl:text-2xl">
                                Follow our socials
                            </h1>
                            <div className="w-full flex items-center space-x-4">
                                {socialLinks.map((social, index) => (
                                    <div key={index} className="w-12 h-12 flex items-center justify-center hover:bg-white bg-neutral-100 rounded-xl  xl:h-10 xl:w-10">
                                        <Link key={social.label} href={social.href} target="_blank">
                                            <img 
                                                className="w-4 h-4 xl:h-4 xl:w-4" 
                                                src={social.icon} 
                                                alt={social.label} 
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex items-start justify-between flex-1 flex-wrap xl:gap-12">
                            <div className="space-y-8">
                                <h1 className="text-xl font-primary text-slate-600 dark:text-neutral-200">Solutions</h1>
                                {footerLinks[0].map((child, index)=>(
                                    <Link key={index} href={child.href} className="w-max block dark:text-white">{child.label}</Link>
                                ))}
                            </div>
                            <div className="space-y-8">
                                <h1 className="text-xl font-primary text-slate-600 dark:text-neutral-200">Resources</h1>
                                {footerLinks[1].map((child, index)=>(
                                    <Link key={index} href={child.href} className="w-max block dark:text-white">{child.label}</Link>
                                ))}  
                            </div>
                            <div className="space-y-8">
                                <h1 className="text-xl font-primary text-slate-600 dark:text-neutral-200">Company</h1>
                                {footerLinks[2].map((child, index)=>(
                                    <Link key={index} href={child.href} className="w-max block dark:text-white">{child.label}</Link>
                                ))} 
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="flex justify-between items-center pt-16 xl:pt-4 w-full">
                <div className="text-slate-600 whitespace-nowrap dark:text-white text-base w-[35%] font-primary leading-normal xl:w-full">
                    {copyright}
                </div>
                <div className="w-[55%] flex items-center space-x-4 text-right text-neutral-400 text-base dark:bg-stone-900 dark:text-white leading-normal xl:hidden">
                    <Link href="#">
                        <p className="justify-items-end text-right">Privacy Policy</p>
                    </Link>
                    <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                    <Link href="#">
                        <p className="justify-items-end text-right">Terms of Service</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;