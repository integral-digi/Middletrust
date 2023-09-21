interface DataProps {
    id: number;
    name: string;
    icon: string;
};

const quickInfo: DataProps[] = [
    {id: 1, name: "Withdraw", icon: "withdraw.svg"},
    {id: 2, name: "Tutorials", icon: "tutorial.svg"},
    {id: 3, name: "Support", icon: "withdraw.svg"}
];

const Quicklinks = () => {
    return (
        <div className="w-96 h-max relative">
            <div className="flex items-center">
                <h3 className="text-slate-600 text-xl font-secondary tracking-tight">
                    Quicklinks
                </h3>
                <img src="lefticon.svg" className="" alt="left" />
            </div>
            <hr className="w-[100%] h-0.5 bg-neutral-100" />
            <div className="justify-between">
                {quickInfo.map((singleInfo) => (
                    <div key={singleInfo.id} className={`${singleInfo.id===1 ? "w-36 h-48 bg-neutral-100 rounded-2xl" : "w-36 h-48 bg-indigo-500 rounded-2xl text-white"}`}>
                        <p className="text-slate-600 text-xl font-secondary">
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