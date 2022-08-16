import TopBar from "../components/TopBar";

function ActiveBids({ onClick }) {
    return(
        <div className="w-full">
            <TopBar onClick={onClick} />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-center font-semibold text-2xl md:text-5xl dark:text-[#ECEBF6]">Active Bids COMING SOON...</h1>
            </div>
        </div>
    )
}

export default ActiveBids;