interface CountryType {
    nation: string;
    flag: string
};

const Countries: CountryType[] = [
    {nation: "Ghana", flag: "ghana.png"}, 
    {nation: "Kenya", flag: "kenya.png"},
    {nation: "Nigeria", flag: "nigeria.png"},
    {nation: "South Africa", flag: "za.png"}
];

const CountriesTwo: CountryType[] = [
    {nation: "China", flag: "china.png"},
    {nation: "United Kingdom", flag: "uk.png"},
    {nation: "United States", flag: "usa.png"}
];

const CountryFlyout = () => {
    return (
        <div className="w-full grid grid-cols-2 bg-white dark:bg-[#1e1e1e] dark:text-white shadow-[rgba(15, 11, 36, 0.15)]">
            <div className="px-12 pt-9 pb-[80px] space-y-16">
                {Countries.map((country, index) =>
                <div key={index} className="flex space-x-5">
                    <div className="h-8 w-8 my-auto"><img src={country.flag} alt={country.flag} /></div>
                    <div className="text-[14px] font-primary my-auto">{country.nation}</div>
                </div>
                )}
            </div>
            <div className="px-12 pt-9 pb-[80px] space-y-16">
                {CountriesTwo.map((country, index) =>
                    <div key={index} className="flex space-x-5">
                        <div className="h-8 w-8 my-auto"><img src={country.flag} alt={country.flag} /></div>
                        <div className="text-[14px] font-primary my-auto">{country.nation}</div>
                    </div>
                )}                
            </div>
        </div>
    );
};

export default CountryFlyout;