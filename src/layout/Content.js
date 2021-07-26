import React, { useEffect, useState } from 'react';
import Divider from '../components/Divider';
import TweetBox from '../components/TweetBox';
import FeedList from '../components/FeedList';
import db from "../firebase";
import firebase from 'firebase';
import { PopularIcon } from '../icons/icon';

function Content() {

    const [tweets, setTweets] = useState([]);
    useEffect(()=> {
        db.collection("feed").onSnapshot((snapshot) => setTweets(snapshot.docs.map(doc => {
            const oldDoc = doc.data();
            oldDoc.id = doc.id;
            doc.ref.set(oldDoc);

            return doc.data();
        })));
    }, [])
    console.log(tweets);
    return (
        <main className= "flex flex-1 flex-col bg-white border-r border-l border-gray-extraLight">
            <header className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-white border-gray-extraLight">
                <span className="font-bold text-lg text-gray-900">Home</span>
                <PopularIcon className="w-5 h-5 text-primary-base"/>
            </header>
            <TweetBox/>
            <Divider/>
            <FeedList tweets={tweets} />
        </main>
    )
}

export default Content
