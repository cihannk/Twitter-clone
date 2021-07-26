import React, { useState } from 'react';
import { EmojiIcon, GifIcon, ImageIcon, PollIcon, SheduleIcon } from '../icons/icon';
import db from "../firebase";
import firebase from 'firebase';

function TweetBox() {

    const [content, setContent] = useState("");

    const sendTweet = () => {
        if (content !== "") {
            db.collection("feed").add({
                displayName: "Cihan Kavuk",
                username: "nightblack05",
                content,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar:"https://pbs.twimg.com/profile_images/1100076946023763970/3t7n4M1h_400x400.jpg",
                image:""
            })
            setContent("");
        }
    };

    return (
        <div className="flex flex-row px-4 pt-2">
            <img src="https://pbs.twimg.com/profile_images/1100076946023763970/3t7n4M1h_400x400.jpg" alt="pp" className="w-12 h-12 rounded-full "></img>
            <div className="p-3 flex flex-col w-full">
                <textarea className="text-xl h-auto outline-none placeholder-gray-dark overflow-hidden resize-none bg-transparent" placeholder="What's Happening?" onChange={(e) => setContent(e.target.value)} value={content}/>
                <div className="flex justify-between items-center">

                    <div className="flex -ml-3 items-center text-primary-base ">
                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light transform transition-color duration-200">
                            <ImageIcon className="w-6 h-6 "/>
                        </div>

                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light transform transition-color duration-200">
                            <GifIcon className="w-6 h-6 "/>
                        </div>

                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light transform transition-color duration-200" >
                            <PollIcon className="w-6 h-6 "/>
                        </div>

                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light transform transition-color duration-200">
                            <EmojiIcon className="w-6 h-6 "/>
                        </div>

                        <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light transform transition-color duration-200">
                            <SheduleIcon className="w-6 h-6 "/>
                        </div>
                    </div>

                    <button className="bg-primary-base rounded-full px-4 py-2 text-white font-semibold" onClick={sendTweet}>Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default TweetBox
