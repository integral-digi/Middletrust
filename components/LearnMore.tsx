import Link from "next/link"

const LearnMore = () => {
    return (
        <div className="w-64 h-6 pt-16 grid grid-cols-2 space-x-0">
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