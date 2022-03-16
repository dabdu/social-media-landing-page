import React from 'react'
import Creators from './Creators'
import Post from './Post'
import Stories from './Stories'

function Feed() {
    return (
        <div className='example flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto '>
            <div className='mx-auto'>
                <Stories />
                <main className='flex'>
                    <Post />
                    <Creators />
                </main>
            </div>
        </div>

    )
}

export default Feed