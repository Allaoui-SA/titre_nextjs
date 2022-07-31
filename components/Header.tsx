import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"


export default function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

        {/* Left - app logo */}
        <div className="relative hidden lg:inline-grid cursor-pointer">
          <Image 
            src="/logo.png" 
            width={160}
            height={66}
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden flex-shrink-0 cursor-pointer flex items-center">
          <Image 
            src="/logo_mini.png" 
            width={71}
            height={34}
            objectFit="contain"
          />
        </div>

        {/* Middle - search input */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500"/>
            </div>
            <input className="bg-gray-50 block w-full pl-10 sm:text-sm rounded-xl border-gray-300 focus:ring-black focus:border-black" type="text" placeholder="Search"></input>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="w-7 h-7 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-90" />
            <div className="absolute -top-2 -right-3 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex justify-center items-center animate-pulse">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img 
            src="/profile_picture.webp"
            alt="profile picture"
            className="h-12 w-12 rounded-full curso-pointer"
          />
        </div>
      </div>
    </div>
  )
}
