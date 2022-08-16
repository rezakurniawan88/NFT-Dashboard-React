import TopBar from "../components/TopBar";

function Market({ onClick }) {
    return(
        <div className="w-full relative">
            <TopBar onClick={onClick} />
            <div className="flex flex-col justify-center h-screen items-center">
                <h1 className="text-xl md:text-2xl font-semibold dark:text-[#ECEBF6]">Upgrade to PRO to use this features</h1>
                <div className="my-4">
                    <button className="bg-[rgb(67,24,255)] text-white text-xs px-5 py-3 mx-1 rounded-full hover:bg-[rgba(67,24,255,0.5)]">Upgrade Now</button>
                    <button className="border border-slate-500 text-xs px-5 py-3 mx-1 rounded-full hover:border-slate-800 hover:font-semibold dark:text-[#ECEBF6] dark:hover:border-slate-300">See details</button>
                </div>
            </div>
        </div>
    )
}

export default Market;