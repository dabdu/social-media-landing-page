import {  ChatIcon, ViewGridAddIcon } from "@heroicons/react/solid";
import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <div className="flex bg-red-700 sticky top-0 z-50 items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center">
                    <h1 className="flex text-3xl text-white items-center justify-center">Playjor</h1>
                <div style={{ backgroundColor: "rgba(255, 255, 255, .3)"}} className=" md:inline-flex  flex ml-10 items-center rounded-full  p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input type="text" className="flex  ml-2 items-center bg-transparent outline-none placeholder-white flex-shrink" placeholder="Search For People" />
                </div>
            </div>
            {/* Center */}
            <div className="flex justify-center flex-grow">
                {/* <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingBagIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />

                </div> */}
            </div>
            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile Pic */}
                <ViewGridAddIcon style={{ backgroundColor: "rgba(255, 255, 255, .3)"}} className="icon" />
                <ShoppingBagIcon style={{ backgroundColor: "rgba(255, 255, 255, .3)"}} className="icon" />
                <ChatIcon style={{ backgroundColor: "rgba(255, 255, 255, .3)"}} className="icon" />
                <span className="flex  rounded-full" style={{ backgroundColor: "rgba(255, 255, 255, .3)"}}>
                    <img 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80"
                    className="h-12 w-12 rounded-full"
                    alt="Imag"
                    />
                    <span className="flex whitespace-nowrap px-2 text-white justify-center items-center align-middle font-semibold">Ayam</span>
                </span>
            </div>

        </div>
    );
}

export default Header;