"use client";
import React from 'react';
import ModelViewer from '../../components/shared/ModelViewer';

const Page: React.FC = () => {
    return (
        <div>
            <ModelViewer />
            <div style={{ height: '200vh', padding: '20px' }}>
                {/* Add more content here */}
            </div>
        </div>
    );
};

export default Page;