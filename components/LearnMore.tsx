import Link from "next/link";

const learnText = {
    title: "Learn more",
    href: "#"
}

const LearnMore = () => {
    return (
        <div className="w-fit h-6 flex items-center space-x-3">
            <Link className="text-indigo-500 text-lg font-primary" href={learnText.href}>
                {learnText.title}
            </Link>
            <div className="w-fit">
                <img 
                    src="/assets/left.svg"
                    className="w-2.5 h-3"
                    alt="left" />
            </div>
        </div>
    );
};

export default LearnMore;