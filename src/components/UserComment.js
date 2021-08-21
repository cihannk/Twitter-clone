import React from 'react'
import { LikeIcon, MoreIcon, MoreIconLight, ReplyIcon, ReTweetIcon, ShareIcon } from '../icons/icon'

function UserComment() {
    return (
        <div className="px-4 pt-3 border-b">
            
            <div className="flex justify-between">
                <div className="flex flex-row">
                    <div className="flex">
                        <img src="https://pbs.twimg.com/profile_images/1100076946023763970/3t7n4M1h_400x400.jpg" className="w-12 h-12 rounded-full"></img>
                    </div>
                    <div className="flex flex-col ml-2">

                        <div className="flex space-x-1 justify-between">
                            <div className="">
                                <span className="font-bold">Cihan Kavuk</span>
                                <span className="">@nightblack05</span>
                                <span>1h</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-gray-500">Replying to</span>
                            <span className="text-primary-base ml-1">@nightblack05</span>
                        </div>
                        
                        <span>Bu bir yorum</span>

                        <div className="flex flex-row justify-between">
                            <div className="flex items-center justify-center -ml-1 w-8 h-8 hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800 rounded-full  ">
                                <ReplyIcon className="w-5 h-5 "/>
                            </div>
                            <div className="flex items-center justify-center -ml-1 w-8 h-8 hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800 rounded-full">
                                <ReTweetIcon  className="w-5 h-5 "/>
                            </div>
                            
                            <div className="flex items-center justify-center -ml-1 w-8 h-8 hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800 rounded-full">
                                <LikeIcon  className="w-5 h-5 "/>
                            </div>
                            <div className="flex items-center justify-center -ml-1 w-8 h-8 hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800 rounded-full">
                                <ShareIcon  className="w-5 h-5 "/>
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div className="flex">
                        <MoreIconLight className="w-7 h-7"/>
                    </div>
            </div>
        </div>
    )
}

export default UserComment
