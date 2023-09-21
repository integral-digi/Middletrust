import SearchIcon from "@/public/images/SearchIcon";
import DarkToggler from "../DarkToggler";
import NotifyIcon from "@/public/images/Notify";

interface UserProps {
    name: string;
    avatar: string
};

interface NavProps {
    name: string;
    icon: JSX.Element;
    class: string;
};

const user: UserProps = {
    name: "Amazon Stores",
    avatar: "amazonstores.png"
};

const navItems: NavProps[] = [
    {name: "dark", icon: <DarkToggler />, class: "w-6 h-6 relative"},
    {name: "search", icon: <SearchIcon />, class: "w-6 h-6 relative"},
    {name: "search", icon: <NotifyIcon />, class: "w-6 h-6 relative"}
];

const TopBar = () => {
    return (
        <div className="flex items-center w-max h-11 relative">
            <div className="flex items-center">
                <h2 className="text-slate-600 text-5xl font-black">Good Morning, {user.name}</h2>
                <img src="wave.svg" className="" alt="waving" />
            </div>
            <div className="space-x-6">
                {navItems.map((item, index) => (
                    <button key={index} className={item.class}>
                        {item.icon}
                    </button>
                ))}
            </div>
            <div className="w-px h-8 relative" />
            <div className="space-x-4">
                <p className="text-right text-slate-600 text-sm font-secondary leading-tight tracking-tight">
                    {user.name}
                </p>
                <div className="w-11 h-11 rounded-full border border-zinc-200 flex items-center">
                    <img src={user.avatar} className="w-10 h-10 relative justify-evenly" alt={user.name} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;