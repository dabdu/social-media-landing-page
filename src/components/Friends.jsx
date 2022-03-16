import React from 'react'
import { stories as friends } from '../data'
function Friends() {
    return (
        <div className=' -ml-32 mr-5 bg-white'>
            {friends.map((friend) => (
                <div style={{ height: "60px", width: "60px" }} className='flex items-center space-x-2 p-2
        hover:bg-gray-200 rounded-xl cursor-pointer
        '>
                    <img className='rounded-xl' src={friend.src} alt="Friends" />
                </div>
            ))}
        </div>

    )
}

export default Friends