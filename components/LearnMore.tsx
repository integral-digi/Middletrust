import Link from "next/link"

const LearnMore = () => {
    return (
        <div className="w-[auto] h-[24px] gap-[15px] pt-[50px] grid grid-cols-2">
            <Link className="text-indigo-500 text-lg font-primary left-0" href="#">
                Learn more
            </Link>
            <div className="my-auto flex">
                <img 
                    src="left.svg"
                    className="w-2.5 h-4"
                    alt="left" />
            </div>
        </div>
    );
};

export default LearnMore;