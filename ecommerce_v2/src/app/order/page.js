// TabBar.js
"use client"
// TabBar.js
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Linker from './linker/page';
import Orders from './orders/page';
import Profile from './profile/page';
const TabBar = () => {
    const [activeTab, setActiveTab] = useState(1);
    const router = useRouter();

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
        switch (tabNumber) {
            case 1:
                window.history.pushState({}, '', '/dashboard/linker');
                break;
            case 2:
                window.history.pushState({}, '', '/dashboard/orders');
                break;
            case 3:
                window.history.pushState({}, '', '/dashboard/profile');
                break;
            default:
                break;
        }
    };

    return (
        <>
            <nav className="nav fixed top-0 w-full"> 
                <ul className="flex justify-between sm:justify-start items-center sm:gap-10 w-full h-20 md:h-28 px-10 Child:text-sm sm:Child:text-base md:Child:text-lg">
                    <item
                        onClick={() => handleTabClick(1)}
                        className={`cursor-pointer text-lg px-2 ${activeTab === 1 ? 'text-white font-semibold' : ' text-white/85'} transition duration-500`}
                    >
                        Get Link
                    </item>
                    <item
                        onClick={() => handleTabClick(2)}
                        className={`cursor-pointer text-lg px-2 ${activeTab === 2 ? 'text-white font-semibold' : ' text-white/85'} transition duration-500`}
                    >
                        Orders
                    </item>
                    <li
                        onClick={() => handleTabClick(3)}
                        className={`cursor-pointer text-lg px-4 py-2 sm:ml-auto ${activeTab === 3 ? 'text-white font-semibold' : ' text-white/85'} sm:border border-white/80 rounded-lg hover:border-white hover:text-white transition duration-300`}
                    >
                        Profile
                    </li>
                </ul>
            </nav>
            <div>
                {activeTab == 1 && <Linker />}
                {activeTab == 2 && <Orders />}
                {activeTab == 3 && <Profile />}
            </div>

        </>

    );
};

export default TabBar;
