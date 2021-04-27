import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getChannel} from "../redux/actions";


const Header = () => {
    const [channelName, setChannelName] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-center h-20 bg-gray-800">
            <div className="relative text-gray-600 focus-within:text-gray-400">
                <input type="search" name="q"
                       className="h-8 rounded-r-none text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 "
                       placeholder="Search..." autoComplete="off" onChange={(e) => setChannelName(e.target.value)}/>

        <button type="submit" className="h-8 px-2  rounded-l-none focus:shadow-outline bg-white rounded-md focus:bg-gray-600 focus:outline-none focus:text-gray-900" onClick={(e) =>
            dispatch(getChannel(channelName))}> GO
        </button>


            </div>

        </div>
    );
};

export default Header;