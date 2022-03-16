import React from 'react'

function SidebarRow({ Icon, title }) {
    return (
        <div className='flex items-center space-x-2 p-2
        hover:bg-gray-200 rounded-xl cursor-pointer
        '>
            {Icon && (
                <Icon className="h-8 w-8 text-red-600" />
            )}
            <p className='hidden md:inline-flex font-medium'>
                {title}</p>
        </div>
    )
}

export default SidebarRow