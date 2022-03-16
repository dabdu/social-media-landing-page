import React from 'react'

function StoryCard({ name, src, profile }) {
    return (
        <div className='relative h-40 w-40 cursor-pointer overflow-x p-3
        transition duration-200 transform ease-in hover:scale-105 hover:animate-pluse
        '>
            {/* <img
                className='absolute mx-auto justify-center opacity-0 lg:opacity-100 rounded-full z-50 top-10'
                src={profile}
                width={40}
                height={40}
                alt={"Profile"}
            /> */}
            <img
                className='object-cover filter brightness-75 rounded-full border-2 border-red-700'
                src={src}
                alt={"src"}
            />
        </div>
    )
}

export default StoryCard