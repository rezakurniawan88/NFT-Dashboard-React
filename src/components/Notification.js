import { useState } from "react";

function Notification() {
    const [isActive, setActive] = useState(false);
    const toggleClassNotification = () => {
        setActive(!isActive);
      };

    return (
        <>
        <div className="hidden md:flex w-11 h-10 rounded-full bg-white mt-6 ml-1 z-10 md:mx-1 cursor-pointer dark:bg-[#201E43]" onClick={toggleClassNotification}>
            <img src={require("../assets/icons/Notification.png")} alt="notification" className="w-4 h-4 m-auto dark:invert" />
        </div>

        <div id="dropdownNotification" className={isActive ? "absolute mt-16 ml-[-1rem] z-20 w-full max-w-sm bg-white rounded divide-y divide-gray-100 shadow block dark:bg-[#201E43] dark:divide-[#030229]" : "hidden"} aria-labelledby="dropdownNotificationButton" data-popper-placement="bottom">
        <div className="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-[#0f0e31] dark:text-white">
            Notifications
        </div>
        <div className="divide-y divide-gray-100 dark:divide-[#030229]">
            <a href="index.html" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-[rgba(126,107,239,0.2)]">
            <div className="pl-3 w-full">
                <div className="text-gray-500 text-xs mb-1.5 dark:text-[#ECEBF6]">A topup of 0.04 ETH has been successfully via the bank transfer method</div>
                <div className="text-xs text-blue-600">a few moments ago</div>
            </div>
            </a>
            <a href="index.html" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-[rgba(126,107,239,0.2)]">
            <div className="pl-3 w-full">
                <div className="text-gray-500 text-xs mb-1.5 dark:text-[#ECEBF6]"><span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span className="font-medium text-gray-900  dark:text-white">20 others</span> started following you.</div>
                <div className="text-xs text-blue-600">10 minutes ago</div>
            </div>
            </a>
            <a href="index.html" className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-[rgba(126,107,239,0.2)]">
            <div className="pl-3 w-full">
                <div className="text-gray-500 text-xs mb-1.5 dark:text-[#ECEBF6]"><span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span className="font-medium text-gray-900  dark:text-white">120 others</span> love your NFT. See it and view more stories.</div>
                <div className="text-xs text-blue-600">38 minutes ago</div>
            </div>
            </a>
        </div>
        <a href="index.html" className="block py-2 text-xs font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100  dark:bg-[#0f0e31] dark:text-white">
            <div className="inline-flex items-center ">
            <svg className="mr-2 w-4 h-4 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                View all
            </div>
        </a>
        </div>
        </>
    );
}

export default Notification;