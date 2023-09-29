import SearchIcon from "@/public/images/SearchIcon";
import DarkToggler from "../DarkToggler";
import NotifyIcon from "@/public/images/Notify";
import { useMemo, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import AccDropdown from "./AccountDropdown";
import SearchModal from "./Search";

interface UserProps {
  name: string;
  avatar: string;
};

interface NavProps {
  name: string;
  icon: JSX.Element;
  class: string;
};

const checkTime = (currentHour?: number) => {
  // Handle the case where currTime is undefined.
  if (currentHour === undefined) {
    return "Day";
  }

  if (currentHour >= 1 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};

const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const currentHour = new Date().getHours(); // Get the current hour of the day

const timeOfDay = checkTime(currentHour);

console.log(`In the time zone ${currentTimeZone}, it is currently ${timeOfDay}.`);



export const user: UserProps = {
  name: "Efe",
  avatar: "amazonstores.png",
};

export const navItems: NavProps[] = [
  { name: "dark", icon: <DarkToggler />, class: "w-6 h-6 relative" },
  { name: "search", icon: <SearchIcon />, class: "w-6 h-6 relative" },
  { name: "notify", icon: <NotifyIcon />, class: "w-6 h-6 relative" },
];

const TopBar = () => {
  const memoNavItems = useMemo(() => {
    return navItems.map((item, index) => (
      <button key={index} className={item.class}>
        {item.icon.key === 1 ? 
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
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel id="search-field" className="absolute">
                <SearchModal />
              </Popover.Panel>
            </Transition>
          </Popover> : <span>{item.icon}</span>   
        }
      </button>
    ));
  }, [navItems]);

  return (
    <div className="flex items-center w-full h-12 relative justify-between">
      <div className="flex items-center gap-5">
        <h2 className="text-slate-600 dark:text-white text-5xl font-black lg:text-3xl">
          Good {timeOfDay}, {user.name}
        </h2>
        <img src="wave.svg" alt="waving" className="w-12 h-12" />
      </div>
      <div className="flex items-center space-x-6">
        <div className="space-x-6 lg:hidden">
          {memoNavItems}        
        </div>
        <div className="w-px h-8 relative border-neutral-200" />
        <div className="space-x-4 flex items-center">
          <p className="text-right text-slate-600 dark:text-white text-sm font-secondary leading-tight tracking-tight lg:hidden">
            {user.name}
          </p>
          <Popover data-popover-target="AccDrop" className="relative lg:hidden">
            <Popover.Button className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-zinc-200">
                <img src={user.avatar} alt={user.name} className="w-11 h-auto rounded-full mx-auto my-auto" />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
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

export default TopBar;