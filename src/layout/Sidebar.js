import {React, useState} from 'react';
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';
import { BookmarksIcon, ExploreIcon, HomeIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon, SheduleIcon } from '../icons/icon';
import twitterLogo from "../images/twitter.svg";


const sideLinks = [
    {name:"Home", icon:HomeIcon},
    {name:"Explore", icon:ExploreIcon},
    {name:"Notifications", icon:NotificationIcon},
    {name:"Messages", icon:MessagesIcon},
    {name:"Bookmarks", icon:BookmarksIcon},
    {name:"Lists", icon:ListsIcon},
    {name:"Profile", icon:ProfileIcon},
    {name:"More", icon:MoreIcon},
]

function Sidebar() {
    const [active, setActive] = useState("Home");

    const handleMenuItemClick = (name) =>{
        setActive(name);
    }

    return (
        <div className= "sticky top-0 h-screen flex flex-col justify-between px-2 w-72 bg-white">
            <div>
                <div className=" w-12 h-12 mt-1 mb-2 ml-1 flex items-center justify-center rounded-full hover:bg-gray-lightest transform transition-color duration-200">
                    <img src={twitterLogo} alt="twitter logo" className="w-8 h-8"></img>
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLinks.map(({ name, icon }) => (
                            <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark shadow-lg text-white rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200 ">Tweet</button>
            </div>

            <UserBox/>
        </div>
    )
}

export default Sidebar


