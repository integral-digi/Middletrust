"use client"
import { useMemo, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import SearchIcon from "@/public/images/SearchIcon";
import DarkToggler from "../DarkToggler";
import NotifyIcon from "@/public/images/Notify";
import AccDropdown from "./AccountDropdown";
import SearchModal from "./Search";
import GoBackButton from "./GoBack";

interface UserProps {
  name: string;
  avatar: string;
}

interface NavProps {
  name: string;
  icon: JSX.Element;
  class: string;
}

export const user: UserProps = {
  name: "Efe",
  avatar: "amazonstores.png",
};

export const navItems: NavProps[] = [
  { name: "dark", icon: <DarkToggler />, class: "w-6 h-6 relative" },
  { name: "search", icon: <SearchIcon />, class: "w-6 h-6 relative" },
  { name: "notify", icon: <NotifyIcon />, class: "w-6 h-6 relative" },
];

interface TopBarTwoProps {
  currentTitle: string;
}

const TopBarTwo: React.FC<TopBarTwoProps> = ({ currentTitle }) => {

  const memoNavItems = useMemo(() => {
    return navItems.map((item, index) => (
      <button key={index} className={item.class}>
        {item.name === "search" ? (
          <Popover data-popover-target="search-field" className="relative">
            <Popover.Button>{item.icon}</Popover.Button>
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
              <Popover.Panel id="search-field" className="absolute">
                <SearchModal />
              </Popover.Panel>
            </Transition>
          </Popover>
        ) : (
          <span>{item.icon}</span>
        )}
      </button>
    ));
  }, []);

  return (
    <div className="flex items-center w-full h-12 relative justify-between">
      <div className="flex items-center gap-5">
        <GoBackButton />
        <h2 className="text-slate-600 dark:text-white text-5xl font-black lg:text-3xl">
          {currentTitle}
        </h2>
      </div>
      <div className="flex items-center space-x-6">
        <div className="space-x-6 lg:hidden">{memoNavItems}</div>
        <div className="w-px h-8 relative border-neutral-200" />
        <div className="space-x-4 flex items-center">
          <p className="text-right text-slate-600 dark:text-white text-sm font-secondary leading-tight tracking-tight lg:hidden">
            {user.name}
          </p>
          <Popover data-popover-target="AccDrop" className="relative lg:hidden">
            <Popover.Button className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-zinc-200">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-11 h-auto rounded-full mx-auto my-auto"
                />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -ml-40 mt-2 z-20" id="AccDrop">
                <AccDropdown />
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default TopBarTwo;