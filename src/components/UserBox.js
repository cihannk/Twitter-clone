import React from 'react'
import { UserSettingsIcon } from '../icons/icon'

function UserBox() {
    return (
        <div className=" px-4 py-2 flex items-center mb-3 hover:bg-primary-light cursor-pointer rounded-full transform transition-colors duration-200">
            <img src="https://pbs.twimg.com/profile_images/1100076946023763970/3t7n4M1h_400x400.jpg" alt="pp" className="w-11 h-11 rounded-full"></img>
            <div className=" mx-3 flex flex-col justify-between">
                <span className="font-bold text-sm">Cihan Kavuk</span>
                <span className="text-sm text-gray-dark">@nightblack0</span>
            </div>
            <UserSettingsIcon className="w-6 h-6 ml-16"/>


        </div>
    )
}

export default UserBox
