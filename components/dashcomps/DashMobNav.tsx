//importing user and icons
import { Fragment } from "react";
import { user } from "@/app/account/AccComps/UserData";
import Burger from "@/public/images/Burger";
import { navItems } from "./TopBar";
import { Popover, Transition } from "@headlessui/react";
import SearchModal from "./Search";
import SideNav from "./SideNav";
import AccDropdown from "./AccountDropdown";

const bottomNavItems = 
navItems.map((item, index) => (
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
        </Popover> : <div className="flex items-center space-x-7">{item.icon}</div>   
      }
    </button>
  ));


const BottomNav = () => {
    return (
        <div className="fixed bottom-0 bg-white dark:bg-stone-900 h-max w-full">
            <nav className="w-max py-6 relative">
                <div className="flex items-center" id="mobile-dash-menu">
                  <Popover className="relative" data-popover-target="side-nav">
                    <Popover.Button className="w-12 h-12">
                      <Burger />
                    </Popover.Button>
                    <Popover.Panel className="absolute bottom-0" id="side-nav">
                      <SideNav />
                    </Popover.Panel>
                  </Popover>

                  <div className="w-12 h-12 flex items-center space-x-0">
                    {bottomNavItems}
                  </div>
                  
                  <Popover data-popover-target="AccDrop" className="relative lg:hidden">
                    <Popover.Button className="relative">
                      <div className="w-8 h-8 rounded-full border-2 border-zinc-200">
                        <img src={user.avatar} alt={user.username} className="w-8 h-auto rounded-full mx-auto my-auto" />
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
            </nav>
        </div>
    );
};

export default BottomNav;