interface CardType {
    cardName: string;
    cardDesc: string;
    cardImage?: string
};

const cardInfo: CardType[] = [
    {cardName: "Insurance", cardDesc: "Transactions on Middletrust are insured up to the tune of $10,000", cardImage: "Insurance.svg"},
    {cardName: "Support", cardDesc: "Access 24/7 support. Chat or Call? We are only 1-click away.", cardImage: "Support.svg"},
    {cardName: "Notifications", cardDesc: "Get SMS/Email notifications about your ongoing transactions in real time.", cardImage: "Notifications.svg"}
];

const Cards = () => {
    return (
        <div className="grid gap-6 grid-cols-3 pt-[100px] w-[100%] sm:grid-cols-1 lg:space-y-6 lg:grid-cols-1">
            {cardInfo.map((card) => (
                <div className="w-[380px] h-[600px] lg:w-[100%] lg:h-[440px] bg-indigo-500 overflow-clip dark:bg-[#1E1A1A] rounded-[10px] px-[40px] py-[100px] left-[20px] lg:px-[24px] lg:left-0 top-[190px] hover:bg-[#6A5ACD]">
                    <h1 className="text-white text-[40px] sm:text-[32px] font-black">
                        {card.cardName}
                    </h1>
                    <p className="w-[300px] lg:w-[84%] pt-4 text-white text-lg font-primary">
                        {card.cardDesc}
                    </p>
                    <img className="bottom-0 ml-[56px] mt-[112px] lg:mt-[36px] left-0"
                        src={card.cardImage ?? "card_default.svg"} />
            </div>
            ))}
        </div>
    );
};

export default Cards;