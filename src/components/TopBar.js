import { useState } from 'react';
import Notification from './Notification';
import '../styles/Navbar.css';

function TopBar({ onClick, isOpen }) {
    const [isActive, setActive] = useState(false);
    const [isDark, setDark] = useState(true);

    const toggleClassProfile = () => {
        setActive(!isActive);
      };

    const switchTheme = () => {
        setDark(!isDark);
        if(isDark === true) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    return (
        <>
        <div className="flex flex-col md:flex-row relative md:my-[-0.7rem] w-full">
            <div className="flex relative order-2 bg-white w-[85%] md:w-[50%] h-[45%] md:my-8 my-6 ml-7 rounded-xl dark:bg-[#201E43]">
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon h-6 w-6 absolute mt-3 ml-4 text-[rgba(97,92,126,0.6)] dark:text-[rgba(236,235,246,0.6)]" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="search" name="search" placeholder="Search Nfts..." className="w-[92%] pl-11 py-3 rounded-xl text-[13px] focus:outline-none dark:bg-[#201E43] dark:text-[#ECEBF6]" />
                <button className="mt-[-1.5rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="filter-icon h-6 w-6 absolute right-0 mr-3 text-[rgba(97,92,126,0.5)] rotate-90 dark:text-[rgba(236,235,246,0.6)]" fill="none" viewBox="0 0 30 30" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </button>
            </div>

            <div className="flex w-full md:w-[30%] m-auto md:absolute right-0 md:mr-6 md:mt-3 px-7 md:px-0 py-3 md:py-0 bg-white md:bg-transparent dark:bg-[#201E43] dark:md:bg-transparent">
                <div className="md:hidden my-auto cursor-pointer" onClick={onClick}>
                    <div className={isOpen ? "absolute w-6 h-[2px] rotate-45 transition-all delay-300" : "w-6 h-[2px] my-1 bg-[#3d3d3d] dark:bg-[#ECEBF6]"} />
                    <div className={isOpen ? "w-6 h-[2px] -rotate-45 transition-all delay-300" : "w-6 h-[2px] my-1.5 bg-[#3d3d3d]  dark:bg-[#ECEBF6]"} />
                </div>
                <div className="flex my-auto ml-4 md:hidden">
                    <img src={require("../assets/images/logo.png")} alt="logo" className="w-5 h-5 dark:brightness-0 dark:invert" />
                    <h2 className="text-[#5639FF] text-base font-semibold pl-2 dark:text-white">Creatip</h2>
                </div>
                <div className="flex justify-end w-full">
                    <div className="flex mx-2">
                        <img src={require("../assets/images/profile.png")} alt="profile" className="w-8 h-8 md:w-10 md:h-10 md:mt-6 border border-blue-500 rounded-full cursor-pointer" onClick={toggleClassProfile} />

                        <button id="dropdownInformationButton" onClick={toggleClassProfile} data-dropdown-toggle="dropdownInformation" className="hidden md:inline-flex text-gray-900 bg-transparent font-medium rounded-lg text-sm mt-5 mx-3 text-center break-all items-center" type="button">
                            <div className="text-left">
                                <p className="text-[#44435C] text-xs font-medium dark:text-[#ECEBF6]">Adelaida Perry </p>
                                <p className="text-[9px] text-[#44435C] font-normal dark:text-[#ECEBF6]">Creator</p>
                            </div>
                            <svg className="ml-2 mt-[-1rem] w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        <div id="dropdownInformation" className={isActive ? "z-50 w-44 bg-white rounded divide-y divide-gray-100 shadow absolute md:mt-16 mt-10 md:mx-3 ml-[-7.5rem] md:ml-0 dark:bg-[#201E43] dark:divide-[#030229]" : "hidden"} data-popper-placement="bottom">
                            <div className="py-3 px-4 text-xs text-gray-900 dark:text-[rgba(236,235,246,0.6)]">
                                <div>Adelaida Perry</div>
                                <div className="font-medium truncate">adelaida120@creatip.com</div>
                            </div>
                            <ul className="py-1 text-xs text-gray-900 dark:text-[rgba(236,235,246,0.6)]" aria-labelledby="dropdownInformationButton">
                            <li>
                                <a href="index.html" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-[rgba(126,107,239,0.2)]">Account</a>
                            </li>
                            <li>
                                <a href="index.html" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-[rgba(126,107,239,0.2)]">My Wallet</a>
                            </li>
                            <li>
                                <a href="index.html" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-[rgba(126,107,239,0.2)]">Settings</a>
                            </li>
                            </ul>
                            <button className="w-full flex py-1.5 hover:bg-gray-100 dark:hover:bg-[rgba(126,107,239,0.2)]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 ml-3 mr-1 text-[rgba(220,38,38,0.7)]" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <p className="py-1 text-xs text-red-600 font-medium">Sign out</p>
                            </button>
                        </div>

                        {/* <div className="mt-6 ml-4">
                            <h4 className="font-semibold text-[14px]">Adelaida Perry</h4>
                            <p className="text-[12px]">Creator</p>
                        </div> */}
                    </div>
                    <Notification />
                    <button onClick={switchTheme} className="w-8 h-8 md:mt-7 px-1 mx-2">
                      {document.documentElement.classList.value === "dark" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4f4e69]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                      )}
                    </button>
                </div>

            </div>
                {/* <h2 className="text-center font-semibold mt-6 mb-[-1rem] md:hidden">Search Your NFT</h2> */}
        </div>
        </>
    );
}

export default TopBar;