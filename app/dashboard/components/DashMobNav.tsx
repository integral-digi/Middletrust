import { Fragment } from "react";
import { user } from "@/app/account/AccComps/UserData";
import Burger from "@/public/images/Burger";
import { Popover, Transition } from "@headlessui/react";
import SearchModal from "./Search";
import SideNav from "./SideNav";
import AccDropdown from "./AccountDropdown";
import { NavProps } from "./TopBar";
import DarkToggler, { DarkProps } from "../../../components/DarkToggler";
import SearchIcon from "@/public/images/SearchIcon";
import NotifyIcon from "@/public/images/Notify";

const BottomNav: React.FC<DarkProps> = ({ isDarkMode, handleDark }) => {
  const navItems: NavProps[] = [
    { name: "burger", icon: <Burger />, class: "w-6 h-6" },
    { name: "dark", icon: <DarkToggler isDarkMode={isDarkMode} handleDark={handleDark} />, class: "w-6 h-6 relative" },
    { name: "search", icon: <SearchIcon />, class: "w-6 h-6 relative" },
    { name: "notify", icon: <NotifyIcon />, class: "w-6 h-6 relative" },
    { name: "avatar", icon: <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full border-2 border-zinc-200 object-cover" />, class: "w-8 h-8 rounded-full border-2 border-zinc-200" }
  ];

  const renderPopoverContent = (name: string) => {
    switch (name) {
      case "burger":
        return <SideNav />;
      case "search":
        return <SearchModal />;
      case "avatar":
        return <AccDropdown />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-0 bg-white dark:bg-stone-900 h-max w-full border-t border-neutral-200/40">
      <nav className="w-full py-6 px-8 relative">
        <div className="flex items-center" id="mobile-dash-menu">
          <div className="w-full flex items-center justify-between">
            {navItems.map((item, index) => (
              <Popover key={index} className="relative">
                <Popover.Button className={item.class}>
                  {item.icon}
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
                  <Popover.Panel className="absolute z-10 mb-8">
                    {renderPopoverContent(item.name)}
                  </Popover.Panel>
                </Transition>
              </Popover>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
