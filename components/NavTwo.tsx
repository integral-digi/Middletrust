import Link from "next/link";
import DarkToggler from "./DarkToggler";
import ChevronDown from "@/public/images/chevronDown";
import { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FlyOutMenuOne from "./Megamenu";
import IntegrationMenu from "./IntegrationMenu";
import AboutFlyout from "./AboutMenu";

const navlinks = [
    {name: "Products", href: "#" , current: true},
    {name: "Integrations", href: "#", current: false},
    {name: "Company", href: "#", current: false},
    {name: "Pricing", href: "#", current: false}

];

const mainLogo = [
    "midicon.svg",
    "logo_dark.svg"
];

const NavTwo = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div className="bg-white dark:bg-stone-900 flex flex-row w-screen">
            <ul className="text-slate-600 dark:text-white text-base leading-7 w-full space-y-8 p-9">
                <div className="flex justify-between py-[36px] mx-auto">
                    <div className="w-auto h-6 float-left">
                        <img src={!isDarkMode ? mainLogo[0] : mainLogo[1]} alt="logo" className="" />
                    </div>
                    <Popover.Button>
                        <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-white" />
                    </Popover.Button>
                </div>
                <hr className='w-[100%] h-px bg-gray-300 lg:w-[100%]' />
                <Popover data-popover-target="FlyoutMenuOne">
                    <Popover.Button className="w-full">
                        <li className="flex justify-between w-auto"><p className="">{navlinks[0].name}</p><div className="my-auto"><ChevronDown /></div></li>
                    </Popover.Button>
                    <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute left-0 top-0">
                            <FlyOutMenuOne />
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <hr className='w-[100%] h-px bg-gray-300 lg:w-[100%]' />
                <Popover data-popover-target="IntegrationMenu">
                    <Popover.Button className="w-full">
                        <li className="flex justify-between w-auto"><p className="">{navlinks[1].name}</p><div className="my-auto"><ChevronDown /></div></li>
                    </Popover.Button>
                    <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute left-0 top-0">
                            <IntegrationMenu />
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <hr className='w-[100%] h-px bg-gray-300 lg:w-[100%]' />
                <Popover data-popover-target="AboutFlyout">
                    <Popover.Button className="w-full">
                        <li className="flex justify-between w-auto"><p className="">{navlinks[2].name}</p><span className="my-auto"><ChevronDown /></span></li>
                    </Popover.Button>
                    <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute left-0 top-0">
                            <AboutFlyout />
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <hr className='w-[100%] h-px bg-gray-300 lg:w-[100%]' />
                <li className="flex justify-between"><p className="">{navlinks[3].name}</p></li>
                <hr className='w-[100%] h-px bg-gray-300 sm:w-[100%]' />
                <li className="flex justify-between w-auto">
                    <p className="">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                    <div className="my-auto right-0">
                        <DarkToggler />
                    </div>
                </li>
                <hr className='w-[100%] h-px bg-gray-300 lg:w-[100%]' />
                <li className=""><Link href="#">Login</Link></li>
                <hr className='w-[100%] h-px bg-gray-300 lg:w-[100%]' />
                <li>
                    <button className="w-24 h-[46.15px] bg-indigo-500 rounded-[5px]">
                        <p className="text-white">Sign up</p>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavTwo;