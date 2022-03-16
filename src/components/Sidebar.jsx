import { UserGroupIcon } from '@heroicons/react/outline'
import { CheckCircleIcon, DesktopComputerIcon, HomeIcon, PlayIcon, VideoCameraIcon } from '@heroicons/react/solid'
import React from 'react'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className='p-2 mt-2 mr-12'>
            <SidebarRow Icon={HomeIcon} title={"News Feed"} />
            <SidebarRow Icon={CheckCircleIcon} title={"Explore"} />
            <SidebarRow Icon={VideoCameraIcon} title={"Live"} />
            <SidebarRow Icon={DesktopComputerIcon} title={"Channels"} />
            <SidebarRow Icon={UserGroupIcon} title={"Groups"} />
            <SidebarRow Icon={PlayIcon} title={"Playhub"} />
        </div>
    )
}

export default Sidebar