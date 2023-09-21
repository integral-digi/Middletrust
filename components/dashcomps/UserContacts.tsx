"use client"
import { PlusSmallIcon } from "@heroicons/react/24/outline";

interface DashProps {
    name: string;
    photo: string;
    href: string
};

const DashContact = () => {
    const userContacts: DashProps[] = [
        {name: "Jane D", photo: "user.png", href: "#"},
        {name: "Daniel R", photo: "user.png", href: "#"},
        {name: "Leah M", photo: "user.png", href: "#"},
        {name: "Nick L", photo: "user.png", href: "#"}
    ];

    return (
        <div className="w-96 h-max">
            <div className="flex items-center w-[100%]">
                <p className="text-slate-600 dark:text-white text-xl font-secondary tracking-tight">Send payment to</p>
                <PlusSmallIcon />
            </div>
            <hr className="w-[100%] h-0.5 dark:bg-neutral-100" />
            <div className="grid grid-cols-4 w-[100%]">
                <div className="block items-center">
                    <img 
                        src={userContacts[0].photo} 
                        alt={userContacts[0].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300" />
                    <p className="text-slate-600 dark:text-white">{userContacts[0].name}</p>
                </div>
                <div className="block items-center">
                    <img 
                        src={userContacts[1].photo} 
                        alt={userContacts[1].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300" />
                    <p className="text-slate-600 dark:text-white">{userContacts[1].name}</p>
                </div>
                <div className="block items-center">
                    <img 
                        src={userContacts[2].photo} 
                        alt={userContacts[2].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300" />
                    <p className="text-slate-600 dark:text-white">{userContacts[2].name}</p>
                </div>
                <div className="block items-center">
                    <img 
                        src={userContacts[3].photo} 
                        alt={userContacts[3].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300" />
                    <p className="text-slate-600 dark:text-white">{userContacts[3].name}</p>
                </div>
            </div>
        </div>
    );
};

export default DashContact;