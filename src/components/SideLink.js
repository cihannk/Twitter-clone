import React from 'react';
import { Link } from "react-router-dom";


function SideLink({name, Icon, active, onMenuItemClick}) {
    const isActive = active === name;
    return (
        <Link to={`/${name.toLowerCase()}`}>
            <li className="group" onClick={() => onMenuItemClick(name)}>
                <a href={name.toLowerCase()} className="block cursor-pointer text-lg pointer-events-none">
                    <div className="inline-block">
                        <div className={`flex items-center pl-3 pr-8 py-3 group-hover:bg-primary-light group-hover:text-primary-base rounded-full w-full ${isActive ? "text-primary-base" : ""} transform transition-colors duration-200 `}>
                            <Icon/>
                            <span className="ml-5 font-bold">{name}</span>
                        </div>
                    </div>
                    
                </a>
            </li>
        </Link>
        
    )
}

export default SideLink
