"use client"
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { id: 1, name: "Account", icon: "/assets/Settings.svg" },
  { id: 2, name: "Support", icon: "/assets/Supports.svg" },
  { id: 3, name: "Logout", icon: "/assets/Logout.svg" },
];

const AccDropdown = () => {
  const [authUser, setAuthUser] = useState(true);

  const handleClick = () => {
    setAuthUser(!authUser);
  };

  return (
    <div className="w-60 h-52 relative bg-white dark:bg-stone-900 rounded-xl shadow before:content-none before:absolute">
      <nav className="space-y-7 pl-8 pt-8">
        {menuItems.map((item) => (
          <div className="flex items-center space-x-5" key={item.id}>
            {item.id === 2 ? (
              <>
                <img src={item.icon} alt={item.name} className="w-4 h-4 relative" />
                <p className="text-slate-600 dark:text-white text-base font-secondary">{item.name}</p>
              </>
            ) : item.id === 1 ? (
              <>
                <Link href="/account" passHref className="flex items-center space-x-5">
                    <img src={item.icon} alt={item.name} className="w-4 h-4 relative" />
                    <p className="text-slate-600 dark:text-white text-base font-secondary">{item.name}</p>
                </Link>
              </>
            ) : (
              <>
                <Link href="/secure-login" passHref className="flex items-center space-x-5">
                    <img src={item.icon} alt={item.name} className="w-4 h-4 relative" />
                    <p className="text-slate-600 dark:text-white text-base font-secondary">{item.name}</p>
                </Link>
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default AccDropdown;
