interface DataProps {
    id: number;
    name: string;
    icon: string;
};

const quickInfo: DataProps[] = [
    {id: 1, name: "Withdraw", icon: "midicon.svg"},
    {id: 2, name: "Tutorials", icon: "midicon.svg"},
    {id: 3, name: "Support", icon: "midicon.svg"}
];

const Quicklinks = () => {
    return (
        <div className="w-full h-max relative space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-slate-600 dark:text-white text-xl font-secondary tracking-tight">
                    Quicklinks
                </h3>
                <img src="lefticon.svg" className="" alt="left" />
            </div>
            <hr className="w-[100%] h-0.5 bg-neutral-100" />
            <div className="flex justify-between space-x-7">
                {quickInfo.map((singleInfo) => (
                    <div key={singleInfo.id} className={`${singleInfo.id === 2 ? " space-y-20 pl-5 py-6 w-1/3 h-max bg-indigo-500 text-white rounded-2xl" : "space-y-20 pl-5 py-6 w-1/3 h-max bg-neutral-100 rounded-2xl text-slate-600"}`}>
                        <p className="text-xl font-secondary">
                            {singleInfo.name}
                        </p>
                        <img 
                            src={singleInfo.icon} 
                            className="w-9 h-8 relative" 
                            alt={singleInfo.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quicklinks;