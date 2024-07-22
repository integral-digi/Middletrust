import Burger from "@/public/images/Burger";
import { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import NavTwo from "./NavTwo";
import { DarkProps } from "./DarkToggler";

const mainLogo = {
   light: "/assets/midicon.svg",
   dark: "/assets/logo_dark.svg"
}

const MobileNav: React.FC<DarkProps> = ({ isDarkMode }) => {
    return (
        <div className="hidden xl:block">
            <div className="mobile-nav w-full h-fit p-8 z-50">
                <div className="flex items-center w-full justify-between">
                    <div className="w-auto h-6">
                        <img 
                            src={isDarkMode && mainLogo.light || mainLogo.dark} 
                            alt="logo" 
                            className="main-logo" 
                        />
                    </div>
                    <div className="w-fit flex items-center justify-around">
                        <Popover data-popover-target="NavBar">
                            <Popover.Button className="dark:fill-white">
                                <Burger />
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
                                    <Popover.Panel id="NavBar" className="z-40 absolute left-0 top-0 min-h-screen">
                                        <NavTwo isDarkMode={isDarkMode} />
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