// OrdersPage.js
import React from 'react';

const OrdersPage = () => {
    const orders = [
        { id: 1, status: 'Pending' },
        { id: 2, status: 'Shipped' },
        { id: 3, status: 'Delivered' },
        // Add more order data as needed
    ];

    return (
        <div className="container flex flex-col items-center w-full h-screen mx-auto mt-32">
            <h1 className="text-3xl font-bold mb-4 text-center">Orders</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-80 sm:w-96 flex-wrap">
                {orders.map(order => (
                    <div key={order.id} className="flex-1 w-full md:w-auto">
                        <div className="flex items-center justify-center bg-gray-200 w-80 sm:w-96 h-8 rounded-md text-center text-black">
                            {order.status}
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-lg mx-auto">
                <h2 className="text-xl font-bold mb-2 mt-10 text-center">All Orders</h2>
                <ul className='w-[350px] sm:w-[500px]'>
                    {orders.map(order => (
                        <li key={order.id} className="border-b border-gray-300 py-2 w-full">
                            Order ID: {order.id}
                            {/* Add more order information here */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrdersPage;
