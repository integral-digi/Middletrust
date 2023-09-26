const menuItems = [
    {name: "Account", icon: "Profile.svg"},
    {name: "Support", icon: "Supports.svg"},
    {name: "Logout", icon: "Logout.svg"}
];

const AccDropdown = () => {
    return (
        <div className="w-60 h-52 relative bg-white dark:bg-stone-900  rounded-xl shadow before:content-none before:absolute">
            <nav className="space-y-7 pl-8 pt-8">
                {menuItems.map((item, index) => (
                    <div className="flex items-center space-x-5" key={index}>
                        <img src={item.icon} alt={item.name} className="w-4 h-4 relative" />
                        <p className="text-slate-600 dark:text-white text-base font-secondary">{item.name}</p>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default AccDropdown;