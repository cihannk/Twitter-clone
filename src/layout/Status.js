import React, {useState, useEffect} from 'react'
import { BackIcon, LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from '../icons/icon';
import { MoreIconLight } from '../icons/icon';
import { useLocation, Link } from 'react-router-dom';
import db from '../firebase';
import UserComment from '../components/UserComment';

function Status() {
    const [tweet, setTweet] = useState({
        avatar:"",
        content:"",
        displayName:"",
        id:"",
        image:"",
        timeStamp:"",
        username:""
    });

    useEffect(() => {
        db.collection("feed").doc(window.location.pathname.split("/")[3]).get().then(snaphot => {
            const data = snaphot.data();
            setTweet(data);
        })
    }, [])

    return (
        <div className="flex flex-1 flex-col bg-white border-r border-l border-gray-extraLight">

            <header className=" sticky top-0 z-9 flex items-center p-4 border-b bg-white border-gray-extraLight">
                <Link to="/home">
                    <div className="cursor-pointer">
                        <BackIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                </Link>
                
                <span className="font-bold text-lg ml-6 text-gray-900">Tweet</span>
            </header>

            <article className="flex flex-row px-4 pt-3">
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">

                        <div className="flex flex-row">
                            <img src={tweet.avatar} alt="profile photo" className="w-12 h-12 rounded-full cursor-pointer"/>
                            <div className="flex flex-col ml-2">
                                <span className="font-bold">{tweet.displayName}</span>
                                <span className="text-sm text-gray-dark">{`@${tweet.username}`}</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center w-6 h-6">
                            <MoreIconLight/>
                        </div>
                    </div>

                    <div className="mt-2">
                        <span className="text-2xl ">
                            {tweet.content}
                        </span>
                    </div>

                    <div className="flex text-base space-x-2 text-gray-800 my-4">
                        <span>3:03 PM</span>
                        <span>Jul 19  2021</span>
                        <span>Twitter for iphone</span>
                    </div>

                    <div className="flex flex-row space-x-3 border-t border-b py-4">
                        <div className>
                            <span className="font-bold mr-1">123</span>
                            <span>Retweets</span>
                        </div>

                        <div>
                            <span className="font-bold mr-1">352</span>
                            <span>Quote Tweets</span>
                        </div>

                        <div>
                            <span className="font-bold mr-1">21.5K</span>
                            <span>Likes</span>
                        </div>
                    </div>

                    <div className="flex justify-around py-1 border-b">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800">
                            <ReplyIcon className="w-6 h-6"/>
                        </div>

                        <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800">
                            <ReTweetIcon className="w-6 h-6"/> 
                        </div>

                        <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800">
                            <LikeIcon className="w-6 h-6"/> 
                        </div>

                        <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-extraLight transform transition-colors duration-200 text-gray-800">
                            <ShareIcon className="w-6 h-6"/>
                        </div>
                    </div>
                </div>
            </article>

            <div className="px-4 pt-1 h-16">
                <div className="flex flex-row p-1 pt-1 pb-1 items-center">
                    <img src={tweet.avatar} className="w-12 h-12 cursor-pointer rounded-full "/>
                    <textarea className="p-1 h-8 w-4/5 ml-3 resize-none outline-none overflow-hidden text-xl" placeholder="Tweet your reply"></textarea>
                        <button className="bg-primary-base text-white rounded-full font-semibold w-20 h-9 hover:bg-primary-dark">
                            Reply
                        </button>    
                </div>
            </div>

            <div className="h-4 bg-gray-extraLight border"></div>

            <UserComment/>
            <UserComment/>
            <UserComment/>
            <UserComment/>
            <UserComment/>
        
        </div>
        

        
    )
}

export default Status
