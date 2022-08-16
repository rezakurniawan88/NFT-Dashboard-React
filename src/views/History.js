import TopBar from "../components/TopBar";

function History({ onClick }) {
    return(
        <div className="w-full">
            <TopBar onClick={onClick} />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-center font-semibold text-2xl md:text-5xl dark:text-[#ECEBF6]">History COMING SOON...</h1>
            </div>
        </div>
    )
}

export default History;