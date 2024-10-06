"use client";
import React from 'react';
import HeaderDemo from '../../components/AccComponents/HeaderDemo'; // Adjust the import path as necessary
import WhatIsAcc from '../../components/AccComponents/WhatIsAcc'; // Adjust the import path as necessary

const Page: React.FC = () => {
    return (
        <div className="relative min-h-screen">
            <HeaderDemo />
            <main className="flex overflow-y-scroll h-screen flex-col bg-white w-full snap-y snap-mandatory">
                <div className="snap-always snap-center">
                    <WhatIsAcc />
                </div>
                {/* Add more sections here if needed */}
                <div className="snap-always snap-center">
                    {/* Additional content can go here */}
                </div>
            </main>
        </div>
    );
};

export default Page;