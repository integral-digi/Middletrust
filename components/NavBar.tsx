import Link from "next/link";
import { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import DarkToggler from "./DarkToggler";
import FlyOutMenuOne from "./Megamenu";
import IntegrationMenu from "./IntegrationMenu";
import CountryFlyout from "./CountryMenu";
import AboutFlyout from "./AboutMenu";
import ChevronDown from "@/public/images/chevronDown";

const mainLogo = "logo.svg";

const mainLogoVariant = "logo_dark.svg";

export const navlinks = [
    {name: "Products", href: "#" , current: true},
    {name: "Integrations", href: "#", current: false},
    {name: "Company", href: "#", current: false},
    {name: "Pricing", href: "#", current: false}

];

function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div className="w-full dark:bg-[#1E1A1A] py-[36px] px-8 lg:hidden">
            <div className="mx-auto max-w-max flex items-center justify-between flex-wrap lg:flex-nowrap gap-20">
                <div className="flex items-center cursor-pointer w-max">
                    <img
                        src={isDarkMode ? mainLogoVariant : mainLogo}
                        alt="logo"
                        className="h-6" />
                </div>
                <div className="w-max text-slate-600 dark:text-white flex items-center text-sm leading-7 tracking-tight justify-between lg:w-auto lg:border-b-0">
                    {/* Megamenu starts here... */}
                    <Popover className="relative selection:no-underline z-50" data-popover-target="flyout-menu">
                    {({ open }) => (
                        <>
                            <Popover.Button className="focus:outline-none focus:border-none font-book px-8"> 
                                <div className="flex space-x-2 my-auto focus:outline-none focus:border-none"> 
                                    <span className="my-auto">{navlinks[0].name}</span>
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
                                leaveTo="opacity-0 translate-y-1"
                            >

                                <Popover.Panel id="flyout-menu" className="w-max flex-auto absolute mt-[24px] overflow-hidden rounded-[10px] bg-white text-sm leading-6">
                                    <FlyOutMenuOne />
                                </Popover.Panel>
                            </Transition>
                        </>
                         )}
                    </Popover>
                    <Popover className="relative z-50" data-popover-target="integration-menu">
                        <Popover.Button className="font-book px-8 focus:outline-none focus:border-none">
                            <div className="flex space-x-2 my-auto focus:outline-none focus:border-none"> 
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
                            <Popover.Panel className="w-max flex-auto absolute mt-[24px] overflow-hidden rounded-[10px] bg-white text-sm leading-6">
                                <AboutFlyout />
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Link className="font-book px-8" href={navlinks[3].href}>
                        {navlinks[3].name}
                    </Link>
                    <div className="my-auto flex items-center justify-between space-x-6 px-16">
                        <DarkToggler />
                        <Popover data-popover-target="country-menu" className="relative z-50">
                            <Popover.Button className="focus:outline-none focus:border-none flex items-center justify-evenly">
                                <div className="flex gap-2">
                                    <img className="w-6 h-6"
                                        src="naija.svg"
                                        alt="nigerian flag" />
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
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel id="country-menu" className="w-max flex-auto absolute mt-[24px] overflow-hidden rounded-[10px] -ml-16 bg-white text-sm leading-6">
                                    <CountryFlyout />
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                    <div className="flex w-max justify-between gap-10 ">
                        <Link className="font-book mt-auto mb-auto" href={navlinks[2].href}>
                            Login
                        </Link>
                        <button className="w-24 h-[46.15px] bg-indigo-500 rounded-[5px]">
                            <p className="text-white">Sign up</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;