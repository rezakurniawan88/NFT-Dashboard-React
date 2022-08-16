import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ isOpen, innerRef }) {
    // className={isOpen ? "navbar hidden md:block fixed md:sticky md:left-0 md:top-0 md:w-[25%] h-screen md:overflow-y-hidden bg-white text-slate-600 border border-slate-400 border-opacity-10 md:border-none z-50" : "hidden"}

    return (
        <nav ref={innerRef} className={isOpen ? "navbar md:block fixed md:sticky md:left-0 md:top-0 md:w-[25%] h-screen md:overflow-y-hidden bg-white text-slate-600 border border-slate-400 border-opacity-10 md:border-none z-50 dark:bg-[#201E43]" : "navbar hidden md:block fixed md:sticky md:left-0 md:top-0 md:w-[25%] h-screen md:overflow-y-hidden bg-white dark:bg-[#201E43] text-slate-600 border border-slate-400 border-opacity-10 md:border-none z-50"}>
            <div className="flex my-5 mx-12">
                <img src={require("../assets/images/logo.png")} alt="logo" className="w-7 h-7 dark:brightness-0 dark:invert" />
                <h2 className="text-[#5639FF] text-lg font-semibold pl-2 dark:text-white">Creatip</h2>
            </div>

            <ul className="ml-6 text-[rgba(79,78,105,0.6)] font-medium dark:text-[#727190]">
                <NavLink to="/">
                    <div className="flex relative p-3 bg-[#F4F7FE] cursor-pointer dark:bg-[rgba(126,107,239,0.2)]">
                        <img src={require("../assets/icons/Menu.png")} alt="dash-icon" className="w-4 h-4 dark:invert" />
                        <li className="pl-3 text-[#5639FF] font-semibold text-xs dark:text-[#B7ABFF]">Dashboard</li>
                        <div className="absolute right-0 mt-[-0.4rem] mr-0.5 rounded-full w-[0.2rem] h-7 bg-[#5639FF] shadow-sm shadow-blue-600"></div>
                    </div>
                </NavLink>

                <NavLink to="/market">
                    <div className="flex relative p-3 group hover:bg-[#F4F7FE] cursor-pointer dark:hover:bg-[rgba(126,107,239,0.2)]">
                        <img src={require("../assets/icons/Activity.png")} alt="market" className="w-4 h-4 opacity-60 dark:invert" />
                        <li className="pl-3 text-xs group-hover:text-[#5639FF] dark:group-hover:text-[#B7ABFF]">Market</li>
                        <div className="absolute right-0 mr-4 bg-[rgba(5,205,153,0.2)] rounded-xl">
                            <p className="px-2 py-0.5 text-[#05CD99] text-[10px]">PRO</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/activebids">
                    <div className="flex p-3 group hover:bg-[#F4F7FE] cursor-pointer dark:hover:bg-[rgba(126,107,239,0.2)]">
                        <img src={require("../assets/icons/Ticket.png")} alt="active-bids" className="w-4 h-4 opacity-60 dark:invert" />
                        <li className="pl-3 text-xs group-hover:text-[#5639FF] dark:group-hover:text-[#B7ABFF]">Active Bids</li>
                    </div>
                </NavLink>

                <h3 className="p-3 text-sm">PROFILE</h3>
                <NavLink to="/portfolio">
                    <div className="flex p-3 group hover:bg-[#F4F7FE] cursor-pointer dark:hover:bg-[rgba(126,107,239,0.2)]">
                        <img src={require("../assets/icons/Star.png")} alt="portfolio" className="w-4 h-4 opacity-60 dark:invert" />
                        <li className="pl-2 text-xs group-hover:text-[#5639FF] dark:group-hover:text-[#B7ABFF]">My Portfolio</li>
                    </div>
                </NavLink>

                <NavLink to="/history">
                    <div className="flex p-3 group hover:bg-[#F4F7FE] cursor-pointer dark:hover:bg-[rgba(126,107,239,0.2)]">
                        <img src={require("../assets/icons/Folder.png")} alt="history" className="w-4 h-4 opacity-60 dark:invert" />
                        <li className="pl-2 text-xs group-hover:text-[#5639FF] dark:group-hover:text-[#B7ABFF]">History</li>
                    </div>
                </NavLink>

                <NavLink to="/wallet">
                    <div className="flex p-3 group hover:bg-[#F4F7FE] cursor-pointer dark:hover:bg-[rgba(126,107,239,0.2)]">
                        <img src={require("../assets/icons/Wallet.png")} alt="wallet" className="w-4 h-4 opacity-60 dark:invert" />
                        <li className="pl-2 text-xs group-hover:text-[#5639FF] dark:group-hover:text-[#B7ABFF]">My Wallet</li>
                    </div>
                </NavLink>

                <NavLink to="/settings">
                    <div className="flex p-3 group hover:bg-[#F4F7FE] cursor-pointer dark:hover:bg-[rgba(126,107,239,0.2)]">
                        <img src={require("../assets/icons/Settings.png")} alt="setting" className="w-4 h-4 opacity-60 dark:invert" />
                        <li className="pl-2 text-xs group-hover:text-[#5639FF] dark:group-hover:text-[#B7ABFF]">Settings</li>
                    </div>
                </NavLink>
            </ul>

            <div className="balance w-40 h-28 md:w-48 md:h-36 px-4 py-3 rounded-xl text-white absolute m-auto left-0 bottom-0 right-0 top-0 mb-4">
                <h3 className="text-[10px] md:text-xs font-light mt-1 md:mt-3">Your Balance</h3>
                <h1 className="text-base md:text-2xl">9.04 ETH</h1>
                <button className="bg-white text-[#444BF8] my-3 md:my-5 py-2 w-full rounded-lg justify-center font-medium text-[9px] md:text-[11px] break-all hover:bg-slate-100">Top up Balance</button>
            </div>
            
            {/* <div className='md:hidden absolute bottom-0 left-0 right-0 mb-4 text-center'>
                <hr />
                <h1 className="pt-3">Your Balance</h1>
                <p className="text-2xl pb-3">0.9 ETH</p>
            </div> */}
        </nav>
    );
}

export default Navbar;