import { PlusSmallIcon } from "@heroicons/react/24/outline";

interface DashProps {
    name: string;
    photo: string;
    href: string;
}

const userContacts: DashProps[] = [
    { name: "Jane D", photo: "user 1.jpg", href: "#" },
    { name: "Daniel R", photo: "user 2.jpg", href: "#" },
    { name: "Leah M", photo: "user 5.jpg", href: "#" },
    { name: "Nick L", photo: "user 3.jpg", href: "#" },
];

const DashContact = () => {
    return (
        <div className="w-full h-max space-y-6">
            <div className="flex items-center justify-between w-[100%]">
                <h3 className="text-slate-600 dark:text-white text-xl font-secondary tracking-tight">Send payment to</h3>
                <div className="w-6 h-6"><PlusSmallIcon /></div>
            </div>
            <hr className="w-full h-0.5 dark:bg-neutral-100" />
            <div className="grid grid-cols-4 w-[100%] gap-x-12">
                {userContacts.map((contact, index) => (
                    <div key={index} className="block justify-center space-y-7">
                        <img
                            src={contact.photo}
                            alt={contact.name}
                            className="w-16 h-16 rounded-full border-4 border-gray-300 items-center mx-auto"
                        />
                        <p className="text-center text-slate-600 dark:text-white text-base font-primary relative">{contact.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashContact;
