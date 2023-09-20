import Link from "next/link";

const menuItems = [
    {name: "About", href: "/about", icon: "about.svg"},
    {name: "Press", href: "/press", icon: "press.svg"},
    {name: "Careers", href: "/careers", icon: "careers.svg"},
    {name: "Blog", href: "/blog", icon: "blog.svg"},
    {name: "Contact Us", href: "/contact", icon: "contact.svg"}
];

const headings = ["about", "resources"];

const AboutFlyout = () => {
    return (
        <div className="w-full grid grid-cols-2 shadow-[rgba(15, 11, 36, 0.15)] lg:w-screen lg:block">
            <div className="bg-white dark:bg-[#1E1A1A] dark:text-white">
                <div className="px-14 pt-9 pb-[80px] space-y-[50px] lg:px-8">
                    <h1 className="text-left text-slate-500 dark:text-white text-xs font-secondary">{headings[0].toUpperCase()}</h1>
                    {menuItems.map((item, index) => 
                        <div key={index} className="">
                            <Link href={item.href} className="flex space-x-[50px]">
                                <div className="h-6 w-6">
                                    <img src={item.icon} className="my-auto" alt={item.icon} />
                                </div>
                                <div className="text-slate-600 dark:text-white text-base font-secondary">{item.name}</div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-neutral-100 dark:bg-stone-900 dark:text-white">
                <div className="px-14 pt-9 pb-[80px] space-y-6 lg:px-8">
                    <h1 className="text-left text-slate-500 dark:text-white text-xs font-secondary">{headings[1].toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutFlyout;