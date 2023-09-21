"use client"
import { PlusSmallIcon } from "@heroicons/react/24/outline";

interface DashProps {
    name: string;
    photo: string;
    href: string
};

const DashContact = () => {
    const userContacts: DashProps[] = [
        {name: "Jane D", photo: "user 1.jpg", href: "#"},
        {name: "Daniel R", photo: "user 2.jpg", href: "#"},
        {name: "Leah M", photo: "user 5.jpg", href: "#"},
        {name: "Nick L", photo: "user 3.jpg", href: "#"}
    ];

    return (
        <div className="w-max h-max space-y-6">
            <div className="flex items-center justify-between w-[100%]">
                <p className="text-slate-600 text-xl font-secondary tracking-tight">Send payment to</p>
                <div className="w-6 h-6"><PlusSmallIcon /></div>
            </div>
            <hr className="w-[100%] h-0.5 dark:bg-neutral-100" />
            <div className="grid grid-cols-4 w-[100%] gap-x-16">
                <div className="block justify-center space-y-7">
                    <img 
                        src={userContacts[0].photo} 
                        alt={userContacts[0].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300 items-center mx-auto" />
                    <p className="text-center text-slate-600 text-base font-primary relative">{userContacts[0].name}</p>
                </div>
                <div className="block space-y-7 justify-center">
                    <img 
                        src={userContacts[1].photo} 
                        alt={userContacts[1].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300 items-center mx-auto" />
                    <p className="text-center text-slate-600 text-base font-primary">{userContacts[1].name}</p>
                </div>
                <div className="block justify-center space-y-7">
                    <img 
                        src={userContacts[2].photo} 
                        alt={userContacts[2].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300" />
                    <p className="text-center text-slate-600 text-base font-primary">{userContacts[2].name}</p>
                </div>
                <div className="block justify-center space-y-7">
                    <img 
                        src={userContacts[3].photo} 
                        alt={userContacts[3].name} 
                        className="w-16 h-16 rounded-full border-4 border-gray-300" />
                    <p className="text-center text-slate-600 text-base font-primary">{userContacts[3].name}</p>
                </div>
            </div>
        </div>
    );
};

export default DashContact;