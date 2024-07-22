interface CardType {
    cardName: string;
    cardDesc: string;
    cardImage?: string
};

const cardInfo: CardType[] = [
    {cardName: "Insurance", cardDesc: "Transactions on Middletrust are insured up to the tune of $10,000", cardImage: "/assets/Insurance.svg"},
    {cardName: "Support", cardDesc: "Access 24/7 support. Chat or Call? We are only 1-click away.", cardImage: "/assets/Support.svg"},
    {cardName: "Notifications", cardDesc: "Get SMS/Email notifications about your ongoing transactions in real time.", cardImage: "/assets/Notifications.svg"}
];

const Cards = () => {
    return (
        <div className="flex items-center space-x-6 w-full h-full xl:flex-col xl:space-y-6 xl:space-x-0">
            {cardInfo.map((card) => (
                <div className="w-1/3 xl:w-full pt-24 px-12 overflow-clip dark:bg-[#1E1A1A] rounded-xl bg-indigo-500 hover:bg-indigo-700 cursor-pointer">
                    <div className="space-y-6">
                        <h1 className="text-5xl text-white font-black sm:text-4xl">
                            {card.cardName}
                        </h1>
                        <p className="xl:w-full pt-4 text-white text-lg font-primary">
                            {card.cardDesc}
                        </p>
                    </div>
                    <img 
                        className="bottom-0 right-0 float-right pt-14"
                        src={card.cardImage ?? "card_default.svg"} 
                        alt={card.cardName}
                    />
            </div>
            ))}
        </div>
    );
};

export default Cards;