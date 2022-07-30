import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline"


export default function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">

        {/* Left - app logo */}
        <div className="relative hidden lg:inline-grid cursor-pointer">
          <Image 
            src="/logo.png" 
            width={174}
            height={37}
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden flex-shrink-0 cursor-pointer">
          <Image 
            src="/logo_mini.png" 
            width={71}
            height={37}
            objectFit="contain"
          />
        </div>

        {/* Middle - search input */}
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500"/>
          </div>
          <input className="bg-gray-50" type="text" placeholder="Search"></input>
        </div>

        {/* Right */}
      </div>
    </div>
  )
}
