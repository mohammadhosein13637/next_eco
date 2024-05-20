// TabBar.js
"use client"
// TabBar.js
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Linker from './linker/page';
import Orders from './orders/page';
import Profile from './profile/page';
// Animations
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const ltrGifAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const rtlGifAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;



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
            <nav className="nav fixed top-0 w-full z-10">
                <Reveal keyframes={rtlGifAnimation}>
                    <div class="h-[800px] w-[800px] bg-primary/40 absolute -top-[300px] right-0 rounded-3xl rotate-45 z-0"></div>
                </Reveal>
                <ul className="flex justify-between sm:justify-start items-center sm:gap-10 w-full h-20 md:h-28 px-10 Child:text-sm sm:Child:text-base md:Child:text-lg z-50">
                    <item
                        onClick={() => handleTabClick(1)}
                        className={`cursor-pointer text-lg px-2 ${activeTab === 1 ? 'text-secondary font-semibold' : ' text-zinc-700'} transition duration-500 hover:text-primary/95`}
                    >
                        Get Link
                    </item>
                    <item
                        onClick={() => handleTabClick(2)}
                        className={`cursor-pointer text-lg px-2 ${activeTab === 2 ? 'text-secondary font-semibold' : ' text-zinc-700'} transition duration-500 hover:text-primary/95`}
                    >
                        Orders
                    </item>
                    <li
                        onClick={() => handleTabClick(3)}
                        className={`cursor-pointer text-lg px-4 py-2 sm:ml-auto ${activeTab === 3 ? ' font-semibold' : ' text-zinc-700'} sm:border border-zinc-700/80 rounded-lg hover:bg-primary/55 hover:border-primary/55 transition duration-300 z-50`}
                    >
                        Profile
                    </li>
                </ul>
                <Reveal keyframes={ltrGifAnimation}>
                <div class="h-[800px] w-[800px] bg-primary/40 absolute -bottom-[1000px] -left-[500px] rounded-3xl rotate-45 -z[8]"></div>
                </Reveal>

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
