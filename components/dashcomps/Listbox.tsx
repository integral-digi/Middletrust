import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const sortOptions = [
    { id: 1, name: "Last 1 Year", action: "#" },
    { id: 2, name: "Last 30 Days", action: "#" },
    { id: 3, name: "Last 7 Days", action: "#" },
    { id: 4, name: "Last 24 Hours", action: "#" },
];

const ChartDropdown = () => {
    const [selectedOption, setSelectedOption] = useState(sortOptions[1])
  
    return (
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button className="w-32 h-7 px-2 bg-slate-100 dark:bg-stone-900 rounded-md flex items-center justify-between">
          <p className="text-slate-600 dark:text-white text-xs font-secondary">{selectedOption.name}</p>
          <span className="h-auto w-3"><ChevronDownIcon /></span>
        </Listbox.Button>
        <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
            <Listbox.Options className="absolute z-10 shadow bg-white w-max h-fit px-5 space-y-2 py-6 cursor-pointer">
            {sortOptions.map((sortOption) => (
                <Listbox.Option
                key={sortOption.id}
                value={sortOption}
                className="text-slate-600 text-sm font-secondary whitespace-nowrap"
                >
                {sortOption.name}
                </Listbox.Option>
            ))}
            </Listbox.Options>
            </Transition>
      </Listbox>
    )
  };

  export default ChartDropdown;