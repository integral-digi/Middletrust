import { PlusSmallIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface DashProps {
    name: string;
    photo: string;
    href: string;
}

const userContacts: DashProps[] = [
    { name: "Jane Diazzarhihia", photo: "/assets/user1.jpg", href: "#" },
    { name: "Daniel Reghan", photo: "/assets/user2.jpg", href: "#" },
    { name: "Leah Melonie", photo: "/assets/user5.jpg", href: "#" },
    { name: "Nick Lentz", photo: "/assets/user3.jpg", href: "#" },
];

const formattedContacts: string[] = [];

const createLink = "/create";

const ReturnUser = (userContacts: DashProps[]) => {
    for(let i = 0; i < userContacts.length; i++) {
        if(userContacts[i].name.length > 8) {
                formattedContacts.push(userContacts[i].name.slice(0,9))
        } else {
            formattedContacts.push(userContacts[i].name)
        }
    }
};

console.log(formattedContacts);

const DashContact = () => {
    return (
        <div className="w-full h-max space-y-6">
            <div className="flex items-center justify-between w-full">
                <h3 className="text-slate-600 dark:text-white text-xl font-secondary tracking-tight">
                    Send payment to
                </h3>
                <div className="w-6 h-6">
                    <Link href={createLink} passHref>
                        <PlusSmallIcon />
                    </Link>
                </div>
            </div>
            <hr className="w-full h-0.5 dark:bg-neutral-100" />
            <div className="flex w-full justify-between items-center">
                {userContacts.map((contact, index) => (
                    <div key={index} className="space-y-7">
                        <img
                            src={contact.photo}
                            alt={contact.name}
                            className="w-16 h-16 rounded-full border-4 border-gray-300 items-center mx-auto"
                        />
                        {formattedContacts.map((entry, index) => (
                            <p key={index} className="text-center text-slate-600 dark:text-white text-base font-primary relative">
                                {entry}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashContact;
