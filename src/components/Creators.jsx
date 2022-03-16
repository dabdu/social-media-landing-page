import { StarIcon } from '@heroicons/react/solid'
import React from 'react'
import { stories as creators } from '../data';

const Creators = () => {
    return (
        <div className='flex'>
            {/* <div className=''>
                <StarIcon className='flex h-8 w-8 text-orange-700' />
                <span className='flex text-sm'>Top Content Creators</span>
            </div> */}
            <div>
                <div className="grid lg:grid-cols-3 mx-3 px-3 shadow-xl">
                    {

                        creators.map((item, index) => (
                            <div key={index} className="py-4 px-1">
                                <div style={{
                                }} className="flex p-2  rounded-xl shadow-md">
                                    <img
                                        style={{ height: "100px", width: "240px" }}
                                        src={item.profile}
                                        alt="PostImg"
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Creators