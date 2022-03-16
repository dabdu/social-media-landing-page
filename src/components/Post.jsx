import React from 'react'
import { stories as posts } from '../data'
import { CheckCircleIcon, } from "@heroicons/react/solid"
import { CogIcon, HeartIcon, ShareIcon, ChatIcon } from '@heroicons/react/outline'
const Post = () => {
    return (
        <div>
            {posts.map((post) => (
                <div className='border-2 shadow-lg rounded-2xl my-6 mx-12 py-3'>
                    {/* Header */}
                    <div className='flex  items-center px-6 border-b'>
                        <div className='flex items-center justify-start py-2'>
                            <img
                                src={post.profile}
                                alt='Profile'
                                className='h-10 w-10 rounded-full object-cover'
                            />
                            <span className='ml-3 text-xs font-bold text-black'>{post.user}</span>
                            <CheckCircleIcon className='flex h-6 w-6 text-red-600 mr-2' />
                            @afamdan
                        </div>
                    </div>
                    {/* Body */}
                    <div className='py-2 mx-0 '>
                        <p className='px-6 text-sm text-black font-medium text-justify'>
                            {post.content}
                            <span className='ml-1 text-red-600'>Read More...</span>
                        </p>
                        <div style={{ height: "500px" }} className='my-3'>
                            <img className='h-full w-full object-cover' src={post.src} alt="Alternative" />
                        </div>
                    </div>
                    {/* Footer */}
                    <div>
                        <div className='flex justify-between px-14' >
                            <HeartIcon className='flex h-12 w-12' />
                            <ChatIcon className='flex h-12 w-12' />
                            <CogIcon className='flex h-12 w-12' />
                            <ShareIcon className='flex h-12 w-12' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Post