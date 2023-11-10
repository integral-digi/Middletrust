const pageItems = {
    image: "empty-state.svg",
    text: "No contacts yet",
    buttonText: "Create Transaction"
}

const Main = () => {
    return (
        <div className="flex justify-center">
            <div className="mx-auto space-y-8">
                <img src={pageItems.image} alt={pageItems.text} className="w-54 h-auto" />
                <p className="text-center text-slate-600 dark:text-white text-xl font-secondary tracking-tight">{pageItems.text}</p>
                <button className="h-12 w-full bg-indigo-500 rounded-lg justify-center flex items-center">
                    <p className="w-max text-center text-white text-base font-black">{pageItems.buttonText}</p>
                </button>
            </div>
        </div>
    )
}

export default Main;