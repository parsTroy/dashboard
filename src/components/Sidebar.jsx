import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, DocumentSearchIcon, ArrowUpIcon, ExternalLinkIcon } from '@heroicons/react/solid';

const Sidebar = () => {
    return (
        <div className='bg-slate-800 flex-none w-14 sm:w-20 h-screen'>
            <div className='h-20 items-center flex'>
                <Link to="/">
                    <HomeIcon width={40} className='text-gray-300 left-3 sm:left-6 fixed' />
                </Link>
            </div>
            <div className='fixed left-3 sm:left-6 top-[100px]'>
                <Link to="/chart">
                    <ChartBarIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
                </Link>
                <Link to="/search">
                    <DocumentSearchIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
                </Link>
                {/* Add similar Link components for other routes */}
            </div>
            <div className='fixed bottom-4 left-3 sm:left-6'>
                <a href="#top">
                    <ArrowUpIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
                </a>
                <Link to="/external">
                    <ExternalLinkIcon width={40} className='bg-gray-600 p-2 rounded-lg mb-4 text-gray-300' />
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;