"use client"
import Link from "next/link";
import { Fragment } from "react";
import { DarkProps } from "./DarkToggler";
import { Popover, Transition } from "@headlessui/react";
import DarkToggler from "./DarkToggler";
import FlyOutMenuOne from "./Megamenu";
import IntegrationMenu from "./IntegrationMenu";
import CountryFlyout from "./CountryMenu";
import AboutFlyout from "./AboutMenu";
import ChevronDown from "@/public/images/chevronDown";
import { useRouter } from "next/navigation";

const mainLogo = "/assets/logo.svg";

const mainLogoVariant = "/assets/logo_dark.svg";

export const navlinks = [
    {name: "Products", href: "#" , current: true},
    {name: "Integrations", href: "#", current: false},
    {name: "Company", href: "#", current: false},
    {name: "Pricing", href: "#", current: false}

];

const NavBar: React.FC<DarkProps> = ({ isDarkMode }) => {
    const router = useRouter();
    return (
        <div className="w-full h-20 dark:bg-[#1E1A1A] py-8 px-24 xl:hidden">
            <nav className="flex items-center justify-between ">
                <div className="w-fit">
                    <img
                        src={!isDarkMode ? mainLogoVariant : mainLogo}
                        alt="logo"
                        className="w-auto h-6" 
                    />
                </div>
                <div className="w-max text-slate-600 dark:text-white flex items-center text-sm leading-7 tracking-tight justify-between">
                    {/* Megamenu starts here... */}
                    <Popover className="relative selection:no-underline z-50" data-popover-target="flyout-menu">
                    {({ open }) => (
                        <>
                            <Popover.Button className="focus:outline-none focus:border-none font-book px-8"> 
                                <div className="flex space-x-2 items-center focus:outline-none focus:border-none"> 
                                    <span>{navlinks[0].name}</span>
                                    <div className="h-4 w-4"><ChevronDown /></div>
                                </div> 
                            </Popover.Button>
                            <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >

                                <Popover.Panel id="flyout-menu" className="w-max flex-auto absolute mt-6 overflow-hidden rounded-xl bg-white text-sm leading-6">
                                    <FlyOutMenuOne />
                                </Popover.Panel>
                            </Transition>
                        </>
                         )}
                    </Popover>
                    <Popover className="relative z-50" data-popover-target="integration-menu">
                        <Popover.Button className="font-book px-8 focus:outline-none focus:border-none">
                            <div className="flex space-x-2 items-center focus:outline-none focus:border-none"> 
                                <span className="my-auto">{navlinks[1].name}</span>
                                <div className="h-4 w-4 my-auto"><ChevronDown /></div>
                            </div> 
                        </Popover.Button>
                        <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                        <Transition
                                as={Fragment}
                                enter="transition ease-out duration-300"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-250"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel id="integration-menu" className="w-max flex-auto absolute mt-[24px] overflow-hidden rounded-[10px] bg-white text-sm leading-6">
                                <IntegrationMenu />
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Popover data-popover-target="company-menu" className="z-50 relative">
                        <Popover.Button className="font-book px-8 focus:outline-none focus:border-none">
                            <div className="flex space-x-2 my-auto focus:outline-none focus:border-none"> 
                                <span className="my-auto">{navlinks[2].name}</span>
                                <div className="h-4 w-4 my-auto"><ChevronDown /></div>
                            </div> 
                        </Popover.Button>
                        <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1" >
                            <Popover.Panel className="w-max flex-auto absolute mt-6 overflow-hidden rounded-[10px] bg-white text-sm leading-6">
                                <AboutFlyout />
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Link className="font-book px-8" href={navlinks[3].href}>
                        {navlinks[3].name}
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <DarkToggler />
                    <Popover data-popover-target="country-menu" className="relative z-50">
                        <Popover.Button className="focus:outline-none focus:border-none flex items-center justify-evenly">
                            <div className="flex gap-2 items-center">
                                <img className="w-6 h-6"
                                    src="/assets/naija.svg"
                                    alt="nigerian flag" />
                                <div className="h-4 w-4"><ChevronDown /></div>
                            </div>
                        </Popover.Button>
                        <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel id="country-menu" className="w-max flex-auto absolute mt-6 overflow-hidden rounded-xl -ml-16 bg-white text-sm leading-6">
                                <CountryFlyout />
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
                <div className="w-fit flex items-center space-x-10 ">
                    <Link className="font-book text-slate-600 dark:text-white" href="/sign-in">
                        Login
                    </Link>
                    <button className="w-24 h-[46.15px] bg-indigo-500 rounded-md" onClick={()=>router.push("/sign-up")}>
                        <p className="text-white">Sign up</p>
                    </button>
                </div>
        
            </nav>
        </div>
    );
}

export default NavBar;