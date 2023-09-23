import SearchIcon from "@/public/images/SearchIcon";
import DarkToggler from "../DarkToggler";
import NotifyIcon from "@/public/images/Notify";
import { useMemo } from "react";

interface UserProps {
  name: string;
  avatar: string;
}

interface NavProps {
  name: string;
  icon: JSX.Element;
  class: string;
}

const user: UserProps = {
  name: "Efe",
  avatar: "amazonstores.png",
};

const navItems: NavProps[] = [
  { name: "dark", icon: <DarkToggler />, class: "w-6 h-6 relative" },
  { name: "search", icon: <SearchIcon />, class: "w-6 h-6 relative" },
  { name: "search", icon: <NotifyIcon />, class: "w-6 h-6 relative" },
];

const TopBar = () => {
  const memoNavItems = useMemo(() => {
    return navItems.map((item, index) => (
      <button key={index} className={item.class}>
        {item.icon}
      </button>
    ));
  }, [navItems]);

  return (
    <div className="flex items-center w-full h-12 relative justify-between">
      <div className="flex items-center gap-5">
        <h2 className="text-slate-600 dark:text-white text-5xl font-black">
          Good Morning, {user.name}
        </h2>
        <img src="/wave.svg" alt="waving" className="w-12 h-12" />
      </div>
      <div className="flex items-center space-x-6">
        <div className="space-x-6">
          {memoNavItems}
        </div>
        <div className="w-px h-8 relative border-neutral-200" />
        <div className="space-x-4 flex items-center">
          <p className="text-right text-slate-600 dark:text-white text-sm font-secondary leading-tight tracking-tight">
            {user.name}
          </p>
          <div className="w-12 h-12 rounded-full border-2 border-zinc-200">
            <img src={user.avatar} alt={user.name} className="w-11 h-auto rounded-full mx-auto my-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;