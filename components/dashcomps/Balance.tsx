const AccBalance = () => {
    const balance: number = 5206;
    const cardNum: number = 5595;

    return (
        <div className="bg-indigo-500 w-[100%] h-60 rounded-2xl">
            <div className="py-6 px-9">
                <span className="w-full flex items-center justify-between">
                    <p className="text-white text-xs font-primary leading-tight">Available Balance</p>
                    <img src="eye.svg" alt="view-close" className="w-6 h-6" />
                </span>
                <span>
                    <p className="mt-12 text-white text-5xl font-black">${balance.toFixed(2)}</p>
                </span>
                <span className="w-full flex items-center justify-between mt-5">
                    <p className="text-white text-base font-primary">**** {cardNum}</p>
                    <img src="mc.svg" alt="card number" className="w-12 h-8 relative" />
                </span>
            </div>
        </div>
    );
};

export default AccBalance;