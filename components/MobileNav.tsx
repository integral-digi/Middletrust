import Burger from "@/public/images/Burger";
import { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import NavTwo from "./NavTwo";
import { XMarkIcon } from "@heroicons/react/24/outline";

const mainLogo = [
    "midicon.svg",
    "logo_dark.svg"
];

const MobileNav = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className="hidden lg:block">
            <div className="mobile-nav flex w-full h-max z-50">
                <div className="flex w-screen justify-between py-[64px] px-8 mx-auto">
                    <div className="w-auto h-6 float-left">
                        <img src={!isDarkMode ? mainLogo[0] : mainLogo[1]} alt="logo" className="" />
                    </div>
                    <div className="">
                        <Popover data-popover-target="NavBar">
                            <Popover.Button className="dark:fill-white">
                                <Burger className="dark:fill-white" />
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
                                    <Popover.Panel id="NavBar" className="z-40 absolute right-[-0px] top-0">
                                        <NavTwo />
                                    </Popover.Panel>
                                </Transition>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default MobileNav;