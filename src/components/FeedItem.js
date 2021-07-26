import React from 'react'
import { LikeIcon, MoreIconLight, ReplyIcon, ReTweetIcon, ShareIcon } from '../icons/icon'

function FeedItem({avatar, content, displayName, image, timeStamp, username}) {
    return (
        <article className="flex flex-row px-4 pt-3 border-b hover:bg-gray-extraLight transform transition-color duration-200">
            <img className="w-12 h-12 rounded-full mr-2" src={avatar} alt="profile photo"></img>
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                    
                    <div className="space-x-1 items-center">
                        <span className="font-bold text-lg">{displayName}</span>
                        <span className="font-normal">{username}</span>
                        <span className="font-normal">{timeStamp ? timeStamp.toDate().toLocaleTimeString("tr-TR") : "1dk"}</span>
                    </div>

                    <div className="justify-end">
                        <MoreIconLight className="w-7 h-7"/>
                    </div>
                    
                </div>
                <span className="text-l font-normal">{content}</span>
                {image && (
                    <img src={image} alt="tweet image" className=" w-full h-64 rounded-lg mt-2"/>
                )}

                <div className="flex space-x-28 pt-2 -ml-2 text-gray-800 items-center">
                    <div className="group flex items-center hover:text-primary-base">
                        <div className="w-9 h-9 group-hover:bg-primary-basehover rounded-full flex items-center justify-center transform transition-color duration-200">
                            <ReplyIcon className="w-5 h-5"/>
                        </div>
                        <span className="text-sm">123</span>
                    </div>
                    <div className="group flex items-center hover:text-green-400">
                        <div className="w-9 h-9 group-hover:bg-green-100 rounded-full flex items-center justify-center transform transition-color duration-200">
                            <ReTweetIcon className="w-5 h-5"/>
                        </div>
                        <span  className="text-sm">122</span>
                    </div>
                    <div className="group flex items-center hover:text-red-600">
                        <div className="w-9 h-9 group-hover:bg-red-200 rounded-full flex items-center justify-center transform transition-color duration-200">
                            <LikeIcon className="w-5 h-5"/>
                        </div>
                        <span className="text-sm">5675</span>
                    </div>
                    <div className="flex items-center hover:text-primary-base">
                        <div className="w-9 h-9 hover:bg-primary-basehover rounded-full flex items-center justify-center transform transition-color duration-200">
                            <ShareIcon className="w-5 h-5"/>
                        </div>
                        
                        <span className=""></span>
                    </div>
                </div>

            </div>
        </article>
    )
}

export default FeedItem
