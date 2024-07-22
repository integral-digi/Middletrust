import Link from "next/link";
import DarkToggler from "./DarkToggler";
import ChevronDown from "@/public/images/chevronDown";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FlyOutMenuOne from "./Megamenu";
import IntegrationMenu from "./IntegrationMenu";
import AboutFlyout from "./AboutMenu";
import { DarkProps } from "./DarkToggler";

const navlinks = [
    { name: "Products", href: "#", current: true },
    { name: "Integrations", href: "#", current: false },
    { name: "Company", href: "#", current: false },
    { name: "Pricing", href: "#", current: false }
];

const mainLogo = {
    light: "/assets/midicon.svg",
    dark: "/assets/logo_dark.svg"
}

const NavTwo: React.FC<DarkProps> = ({ isDarkMode }) => {
    return (
        <div className="bg-white dark:bg-stone-900 w-screen min-h-screen">
            <ul className="text-slate-600 dark:text-white text-base leading-7 w-full space-y-8 p-9">
                <div className="flex items-center justify-between py-9">
                    <div className="w-auto h-6">
                        <img 
                            src={isDarkMode ? mainLogo.light : mainLogo.dark} 
                            alt="logo" 
                            className="w-fit" 
                        />
                    </div>
                    <Popover.Button>
                        <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-white" />
                    </Popover.Button>
                </div>
                <hr className="dark:bg-black w-full h-px bg-gray-300" />
                <Popover>
                    {({ open }) => (
                        <>
                            <Popover.Button className="w-full">
                                <li className="flex items-center justify-between w-auto">
                                    <p>{navlinks[0].name}</p>
                                    <ChevronDown />
                                </li>
                            </Popover.Button>
                            <Popover.Overlay className={`fixed inset-0 bg-black opacity-30 ${open ? 'block' : 'hidden'}`} />
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-0 top-0">
                                    <FlyOutMenuOne />
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <hr className="dark:bg-black w-full h-px bg-gray-300" />
                <Popover>
                    {({ open }) => (
                        <>
                            <Popover.Button className="w-full">
                                <li className="flex justify-between w-auto">
                                    <p>{navlinks[1].name}</p>
                                    <ChevronDown />
                                </li>
                            </Popover.Button>
                            <Popover.Overlay className={`fixed inset-0 bg-black opacity-30 ${open ? 'block' : 'hidden'}`} />
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-0 top-0">
                                    <IntegrationMenu />
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <hr className="dark:bg-black w-full h-px bg-gray-300 " />
                <Popover>
                    {({ open }) => (
                        <>
                            <Popover.Button className="w-full">
                                <li className="flex justify-between w-auto">
                                    <p>{navlinks[2].name}</p>
                                    <ChevronDown />
                                </li>
                            </Popover.Button>
                            <Popover.Overlay className={`fixed inset-0 bg-black opacity-30 ${open ? 'block' : 'hidden'}`} />
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-0 top-0">
                                    <AboutFlyout />
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <hr className="dark:bg-black w-full h-px bg-gray-300" />
                <li className="flex justify-between">
                    <p>{navlinks[3].name}</p>
                </li>
                <hr className="dark:bg-black w-full h-px bg-gray-300" />
                <li className="flex items-center justify-between w-auto">
                    <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                    <div className="w-fit">
                        <DarkToggler />
                    </div>
                </li>
                <hr className="dark:bg-black w-full h-px bg-gray-300" />
                <li><Link href="#">Login</Link></li>
                <hr className="dark:bg-black w-full h-px bg-gray-300" />
                <li>
                    <button className="w-24 h-12 bg-indigo-500 rounded-md">
                        <p className="text-white">Sign up</p>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavTwo;
