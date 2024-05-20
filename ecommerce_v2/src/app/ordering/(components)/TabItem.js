// TabBar.js
import React from 'react';
import Link from 'next/navigation';

const TabItem = ({ href, label }) => {
    return (
        <Link href={href}>
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {label}
            </a>
        </Link>
    );
};

export default TabItem;
