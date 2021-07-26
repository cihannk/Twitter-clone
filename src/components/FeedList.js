import React from 'react';
import FeedItem from './FeedItem';
import {Link} from "react-router-dom";

function FeedList({ tweets }) {
    return (
        <div>
            {
                tweets.map((tweet, index) => (
                    <Link to={`/status/${tweet.username}/${tweet.id}`}>
                        <FeedItem {...tweet} key={index}/>
                    </Link>
                    
                ))
            }
        </div>
    )
}

export default FeedList
