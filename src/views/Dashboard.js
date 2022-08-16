import '../styles/Body.css';
import TopBar from '../components/TopBar';

function Body({ onClick, isOpen }) {
      
    return (
        <section className="dashboard-body w-full">
            <TopBar onClick={onClick} isOpen={isOpen} />


            <div className="block md:flex md:pl-8 md:py-5">
                <div className="w-[85%] m-auto md:my-0 md:w-[70%]">
                    <div className="flex justify-between">
                        <h1 className="text-sm text-[#44435C] md:text-lg font-semibold dark:text-[#F5F4FB]">Trending NFT's</h1>
                        <ul className="flex text-xs md:text-sm text-[rgba(79,78,105,0.6)] font-medium dark:text-[rgba(236,235,246,0.6)]">
                            <li className="hidden md:block px-1 md:px-4 hover:text-[#5639FF] dark:hover:text-[#B7ABFF]"><a href="index.html">Art</a></li>
                            <li className="hidden md:block px-1 md:px-4 hover:text-[#5639FF] dark:hover:text-[#B7ABFF]"><a href="index.html">Music</a></li>
                            <li className="hidden md:block px-1 md:px-4 hover:text-[#5639FF] dark:hover:text-[#B7ABFF]"><a href="index.html">Collectibles</a></li>
                            <li className="px-1 md:px-4 hover:text-[#5639FF] dark:hover:text-[#B7ABFF]"><a href="index.html">See more</a></li>
                        </ul>
                    </div>
                    <div className="flex my-4">
                        <div className="relative w-1/2 md:w-1/3 h-full bg-white rounded-xl pt-[1px] mr-2 dark:bg-[#201E43]">
                            <div className="relative bg-slate-500 w-[93%] h-36 md:h-[10.5rem] mx-auto mt-1.5 rounded-xl">
                                <div className="absolute right-0 bg-[rgba(255,255,255,0.2)] w-7 h-7 mt-2 mr-2 rounded-md cursor-pointer z-20">
                                    <img src={require("../assets/icons/Bookmark.png")} alt="bookmark-logo" className="flex w-4 h-4 mx-auto mt-[0.4rem] z-20" />
                                </div>
                                <div className="absolute bottom-0 bg-white w-16 rounded-full p-0.5 text-center mb-3 ml-3 z-10 dark:bg-[#201E43]">
                                    <p className="text-[#5639FF] text-[8px] font-medium dark:text-[#ECEBF6]">3 day left</p>
                                </div>
                                <div className="flex w-[30%] absolute bottom-0 right-0 mb-[-0.75rem]">
                                    <div className="relative w-8 h-8 right-0 bg-white rounded-full overflow-hidden dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card2.png")} alt="avacard2" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                    <div className="absolute w-8 h-8 bg-white rounded-full ml-4 dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card1.png")} alt="avacard1" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                </div>
                                <img src={require("../assets/images/nft1.png")} alt="nft1" className="w-full h-full rounded-xl" />
                            </div>
                            <h2 className="font-medium text-sm md:text-base ml-4 mt-3 md:mt-4 text-[#615C7E] dark:text-[#ECEBF6]">Abstract Girl</h2>
                            <div className="flex relative ml-4 py-2 md:pt-2 md:pb-6">
                                <div className="flex">
                                    <p className="text-[11px] text-[#615C7E] mr-4 md:mr-2 dark:text-[#ECEBF6]">Current Bid</p>
                                    <img src={require("../assets/images/ethlogo.png")} alt="eth-logo" className="w-2 h-3 mr-3 mt-0.5" />
                                    <p className="text-[#5639FF] text-[10px] font-bold ml-[-10px]">0.99 ETH</p>
                                </div>
                                <p className="hidden md:block absolute text-[10px] text-[rgba(97,92,126,0.6)] right-0 mr-4 dark:text-[rgba(236,235,246,0.5)]">$2,829</p>
                            </div>
                        </div>

                        {/* card2 */}
                        <div className="relative w-1/2 md:w-1/3 h-full bg-white rounded-xl pt-[1px] md:mx-2 dark:bg-[#201E43]">
                            <div className="relative bg-slate-500 w-[93%] h-36 md:h-[10.5rem] mx-auto mt-1.5 rounded-xl">
                                <div className="absolute right-0 bg-[rgba(255,255,255,0.2)] w-7 h-7 mt-2 mr-2 rounded-md cursor-pointer z-20">
                                    <img src={require("../assets/icons/Bookmark.png")} alt="bookmark-logo" className="flex w-4 h-4 mx-auto mt-[0.4rem] z-20" />
                                </div>
                                <div className="absolute bottom-0 bg-white w-16 rounded-full p-0.5 text-center mb-3 ml-3 z-10 dark:bg-[#201E43]">
                                    <p className="text-[#5639FF] text-[8px] font-medium dark:text-[#ECEBF6]">5 day left</p>
                                </div>
                                <div className="flex w-[38%] absolute bottom-0 right-0 mb-[-0.75rem]">
                                    <div className="relative w-8 h-8 right-0 bg-white rounded-full overflow-hidden dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card3.png")} alt="avacard3" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                    <div className="absolute w-8 h-8 bg-white rounded-full ml-4 dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card2.png")} alt="avacard2" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                    <div className="absolute w-8 h-8 bg-white rounded-full ml-8 dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card1.png")} alt="avacard1" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                </div>
                                <img src={require("../assets/images/nft2.png")} alt="nft2" className="w-full h-full rounded-xl" />
                            </div>
                            <h2 className="font-medium text-sm md:text-base ml-4 mt-3 md:mt-4 text-[#615C7E] dark:text-[#ECEBF6]">Beautiful Flower</h2>
                            <div className="flex relative ml-4 py-2 md:pt-2 md:pb-6">
                                <div className="flex">
                                    <p className="text-[11px] text-[#615C7E] mr-4 md:mr-2 dark:text-[#ECEBF6]">Current Bid</p>
                                    <img src={require("../assets/images/ethlogo.png")} alt="eth-logo" className="w-2 h-3 mr-3 mt-0.5" />
                                    <p className="text-[#5639FF] text-[10px] font-bold ml-[-10px]">0.59 ETH</p>
                                </div>
                                <p className="hidden md:block absolute text-[10px] text-[rgba(97,92,126,0.6)] right-0 mr-4 dark:text-[rgba(236,235,246,0.5)]">$2,829</p>
                            </div>
                        </div>

                        {/* Card3 */}
                        <div className="hidden md:block relative w-1/3 h-full bg-white rounded-xl pt-[1px] mx-2 dark:bg-[#201E43]">
                            <div className="relative bg-slate-500 w-[93%] h-[10.5rem] mx-auto mt-1.5 rounded-xl">
                                <div className="absolute right-0 bg-[rgba(255,255,255,0.2)] w-7 h-7 mt-2 mr-2 rounded-md cursor-pointer z-20">
                                    <img src={require("../assets/icons/Bookmark.png")} alt="bookmark-logo" className="flex w-4 h-4 mx-auto mt-[0.4rem]" />
                                </div>
                                <div className="absolute bottom-0 bg-white w-16 rounded-full p-0.5 text-center mb-3 ml-3 z-10 dark:bg-[#201E43]">
                                    <p className="text-[#5639FF] text-[8px] font-medium dark:text-[#ECEBF6]">2 day left</p>
                                </div>
                                <div className="flex w-[38%] absolute bottom-0 right-0 mb-[-0.75rem]">
                                    <div className="relative w-8 h-8 right-0 bg-white rounded-full overflow-hidden dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card2.png")} alt="avacard2" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                    <div className="absolute w-8 h-8 bg-white rounded-full ml-4 dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card1.png")} alt="avacard1" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                    <div className="absolute w-8 h-8 bg-white rounded-full ml-8 dark:bg-[#201E43]">
                                        <img src={require("../assets/images/ava-card4.png")} alt="avacard4" className="absolute w-full p-1 rounded-full m-auto top-0 bottom-0 right-0 left-0" />
                                    </div>
                                </div>
                                <img src={require("../assets/images/nft3.png")} alt="nft3" className="w-full h-full rounded-xl" />
                            </div>
                            <h2 className="font-medium ml-4 mt-4 text-[#615C7E] dark:text-[#ECEBF6]">Abstract Color</h2>
                            <div className="flex relative ml-4 pt-2 pb-6">
                                <div className="flex">
                                    <p className="text-[11px] text-[#615C7E] mr-2 dark:text-[#ECEBF6]">Current Bid</p>
                                    <img src={require("../assets/images/ethlogo.png")} alt="eth-logo" className="w-2 h-3 mr-3 mt-0.5" />
                                    <p className="text-[#5639FF] text-[10px] font-bold ml-[-10px]">0.05 ETH</p>
                                </div>
                                <p className="absolute text-[10px] text-[rgba(97,92,126,0.6)] right-0 mr-4 dark:text-[rgba(236,235,246,0.5)]">$2,829</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-between mt-10 mb-5 md:mb-3 md:mt-10">
                        <h1 className="text-base text-[#44435C] md:text-lg font-semibold dark:text-[#F5F4FB]">Top NFT's</h1>
                        <div className="flex">
                            <select className="bg-white rounded-lg text-[10px] px-1 md:text-[0.6rem] md:px-2 md:py-1.5 mx-3 focus:outline-none dark:bg-[#201E43] dark:text-[#ECEBF6]">
                                <option defaultValue="Selecy days">Select days</option>
                                <option>Last day</option>
                                <option>Last 3 days</option>
                                <option>Last 7 days</option>
                                <option>Last 1 month</option>
                                <option>Last 3 month</option>
                            </select>
                            <select className="bg-white rounded-lg text-[10px] px-1 md:text-[0.6rem] md:px-2 md:py-1.5 md:mx-3 focus:outline-none dark:bg-[#201E43] dark:text-[#ECEBF6]">
                                <option defaultValue="Select times">Select times</option>
                                <option>All times</option>
                                <option>30 minutes ago</option>
                                <option>1 hours ago</option>
                                <option>3 hours ago</option>
                                <option>9 hours ago</option>
                                <option>12 hours ago</option>
                            </select>
                        </div>
                    </div>
                        <table className="table-auto bg-white w-full md:w-[98%] my-3 md:mb-7 rounded-xl text-[11px] text-center dark:bg-[#201E43]">
                            <thead>
                                <tr className="border-b text-[rgba(97,92,126,0.6)] dark:border-[#030229] dark:text-[rgba(236,235,246,0.6)]">
                                    <th className="p-2 md:p-3">#</th>
                                    <th className="p-2 md:p-3">Collection</th>
                                    <th className="p-2 md:p-3">Volume</th>
                                    <th className="p-2 md:p-3">24%</th>
                                    <th className="p-2 md:p-3">Owners</th>
                                    <th className="p-2 md:p-3">Items</th>
                                </tr>
                            </thead>
                            <tbody className="dark:text-[#ECEBF6]">
                                <tr>
                                    <td className="py-3 md:py-0 md:p-3">1</td>
                                    <td className="flex">
                                        <img src={require("../assets/images/avatable1.png")} alt="ava1" className="hidden md:block md:w-7 my-2 ml-3" />
                                        <p className="py-3 md:py-0 md:ml-4 md:mt-4">Abstract paint</p>
                                    </td>
                                    <td className="py-3 md:py-1 md:px-5">$8,0221.99</td>
                                    <td className="text-red-500 py-3 md:py-1 md:px-5">-28.28%</td>
                                    <td className="py-3 md:py-1 md:px-9">10.5K</td>
                                    <td className="py-3 md:py-1 md:px-9">121</td>
                                </tr>
                                <tr>
                                    <td className="py-3 md:py-0 md:p-3">2</td>
                                    <td className="flex">
                                        <img src={require("../assets/images/avatable2.png")} alt="ava2" className="hidden md:block md:w-7 my-2 ml-3" />
                                        <p className="py-3 md:py-2 md:ml-4 md:mt-2">3D Circle Art</p>
                                    </td>
                                    <td className="py-3 md:p-3">$5,210.02</td>
                                    <td className="text-green-400 py-3 md:p-3">+11.18%</td>
                                    <td className="py-3 md:p-3">12.3K</td>
                                    <td className="py-3 md:p-3">210</td>
                                </tr>
                                <tr>
                                    <td className="py-3 md:py-0 md:p-3">3</td>
                                    <td className="flex">
                                        <img src={require("../assets/images/avatable3.png")} alt="ava3" className="hidden md:block md:w-7 my-2 ml-3" />
                                        <p className="py-3 md:py-2 md:ml-4 md:mt-2">3D Digital Art</p>
                                    </td>
                                    <td className="py-3 md:p-3">$4,240.10</td>
                                    <td className="text-red-500 py-3 md:p-3">-17.12%</td>
                                    <td className="py-3 md:p-3">14.5K</td>
                                    <td className="py-3 md:p-3">450</td>
                                </tr>
                                <tr>
                                    <td className="py-3 md:py-0 md:p-3">4</td>
                                    <td className="flex">
                                        <img src={require("../assets/images/avatable4.png")} alt="ava4" className="hidden md:block md:w-7 my-2 ml-3" />
                                        <p className="py-3 md:py-2 md:ml-4 md:mt-2">3D Cube Art</p>
                                    </td>
                                    <td className="py-4 md:px-3">$7,058.02</td>
                                    <td className="text-green-400 py-3 md:p-3">+10.23%</td>
                                    <td className="py-3 md:p-3">20.3K</td>
                                    <td className="py-3 md:p-3">132</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                <div className="w-full md:w-[30%]">
                    <div className="w-[85%] h-full md:h-[19rem] bg-white m-auto rounded-2xl my-8 md:my-0 md:mb-4 dark:bg-[#201E43]">
                        <div className="flex justify-between py-3 mx-4">
                            <h2 className="text-[14px] text-[#44435C] font-semibold dark:text-[#ECEBF6]">Recently add</h2>
                            <p className="text-xs dark:text-[rgba(236,235,246,0.6)]"><a href="index.html">See all</a></p>
                        </div>
                        <div className="relative w-[90%] h-44 m-auto bg-[#DFD9FF] rounded-2xl">
                            <div className="absolute bottom-0 bg-white w-14 rounded-full p-1 text-center mb-3 ml-3 z-10 dark:bg-[#201E43]">
                                <p className="text-[#5639FF] text-[8px] font-medium dark:text-[#DFD9FF]">03:25:14</p>
                            </div>
                            <img src={require("../assets/images/nft4.png")} alt="nft4" className="absolute w-1/2 md:w-2/3 m-auto top-0 bottom-0 right-0 left-0" />
                        </div>
                        <div className="ml-4 my-3">
                            <h2 className="font-medium text-[#3F4045] mt-4 md:mt-2 dark:text-[#ECEBF6]">3D Circle Art</h2>
                            <div className="flex justify-between py-3 md:py-2">
                                <p className="text-xs md:text-[10px] dark:text-[#ECEBF6]">Current Bid</p>
                                <div className="flex">
                                    <img src={require("../assets/images/ethlogo.png")} alt="eth-logo" className="w-2 h-3 mt-[1px]" />
                                    <p className="text-[#5639FF] ml-0.5 text-xs md:text-[10px] font-semibold">0.05 ETH</p>
                                </div>
                                <button type="submit" name="submit" className="bg-[#5639FF] py-2 px-4 md:px-5 md:py-1.5 rounded-md text-white text-[10px] mr-4 mt-[-0.5rem]">Place Bid</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[85%] h-[17.5rem] bg-white m-auto mb-12 md:mb-0 md:mt-6 rounded-2xl dark:bg-[#201E43]">
                        <div className="flex justify-between py-4 mx-5">
                            <h2 className="text-[14px] font-semibold dark:text-[#ECEBF6]">Top Creators</h2>
                            <p className="text-xs dark:text-[rgba(236,235,246,0.6)]"><a href="index.html">See all</a></p>
                        </div>
                        <div className="ml-5 mt-[-0.5rem]">
                            <div className="flex relative my-[0.8rem]">
                                <img src={require("../assets/images/profile2.png")} alt="profile2" className="w-10" />
                                <div className="ml-2">
                                    <p className="text-[11px] dark:text-[#ECEBF6]">Joe Yates</p>
                                    <p className="text-[8px] dark:text-[rgba(236,235,246,0.6)]">@joe-y25</p>
                                </div>
                                <button type="submit" name="submit" className="absolute right-0 bg-[rgba(68,75,248,0.1)] px-4 py-1.5 mr-5 rounded-md text-[#444bf8] text-[11px] dark:bg-[rgba(130,112,235,0.2)] dark:text-[#CDC6F9]">Follow</button>
                            </div>
                            <div className="flex relative my-[0.8rem]">
                                <img src={require("../assets/images/profile3.png")} alt="profile3" className="w-10" />
                                <div className="ml-2">
                                    <p className="text-[11px] dark:text-[#ECEBF6]">Adelaida Perry</p>
                                    <p className="text-[8px] dark:text-[rgba(236,235,246,0.6)]">@adelaida120</p>
                                </div>
                                <button type="submit" name="submit" className="absolute right-0 bg-[rgba(68,75,248,0.1)] px-4 py-1.5 mr-5 rounded-md text-[#444bf8] text-[11px] dark:bg-[rgba(130,112,235,0.2)] dark:text-[#CDC6F9]">Follow</button>
                            </div>
                            <div className="flex relative my-[0.8rem]">
                                <img src={require("../assets/images/profile4.png")} alt="profile4" className="w-10" />
                                <div className="ml-2">
                                    <p className="text-[11px] dark:text-[#ECEBF6]">Emillie Butler</p>
                                    <p className="text-[8px] dark:text-[rgba(236,235,246,0.6)]">@b_emillie</p>
                                </div>
                                <button type="submit" name="submit" className="absolute right-0 bg-[rgba(68,75,248,0.1)] px-4 py-1.5 mr-5 rounded-md text-[#444bf8] text-[11px] dark:bg-[rgba(130,112,235,0.2)] dark:text-[#CDC6F9]">Follow</button>
                            </div>
                            <div className="flex relative my-[0.8rem]">
                                <img src={require("../assets/images/profile5.png")} alt="profile5" className="w-10" />
                                <div className="ml-2">
                                    <p className="text-[11px] dark:text-[#ECEBF6]">David Smit</p>
                                    <p className="text-[8px] dark:text-[rgba(236,235,246,0.6)]">@davidsmit</p>
                                </div>
                                <button type="submit" name="submit" className="absolute right-0 bg-[rgba(68,75,248,0.1)] px-4 py-1.5 mr-5 rounded-md text-[#444bf8] text-[11px] dark:bg-[rgba(130,112,235,0.2)] dark:text-[#CDC6F9]">Follow</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Body;