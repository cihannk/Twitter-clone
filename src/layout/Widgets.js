import React from 'react';
import { SearchIcon } from "../icons/icon";
import { Timeline } from 'react-twitter-widgets';

function Widgets() {
    return (
        <aside className= "w-80 bg-white pl-5">
            <div className="flex items-center space-x-4 p-3 mt-1 mx-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-5 h-5 "/>
                <input type="text" placeholder="Search twitter" className="bg-gray-200 focus:bg-white placeholder-gray-dark focus:outline-none text-black text-sm w-full "></input>
            </div>
            <div className="mt-4">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'nightblack05'
                }}
                options={{
                    height: '1000'
                }}
            />
            </div>
        </aside>
    )
}

export default Widgets
