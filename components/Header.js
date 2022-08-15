import Image from 'next/image'
import {
  PlusCircleIcon,
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Header() {
  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()


  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 py-3 lg:mx-auto">

        {/* Left - Logo */}
        <div className="relative hidden lg:inline-grid cursor-pointer" onClick={() => router.push("/")}>
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

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          {session ? (
            <>
              {/* Profile picture */}
              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn inline-flex" />
              <img 
                src={session.user.image}
                alt="profile picture"
                className="h-12 min-w-12 rounded-full curso-pointer"
              />
              <button className="text-sm font-semibold text-blue-500 hover:text-red-400 transition duration-150" onClick={() => signOut({ callbackUrl: "/auth/signin"})}>Sign Out</button>
            </>
          ) : (
            <>
              <img 
                src="/user.jpeg"
                alt="profile picture"
                className="h-12 w-12 rounded-full curso-pointer"
                />
              <button className="text-sm font-semibold text-blue-500 hover:text-red-400 transition duration-150" onClick={signIn}>Sign In</button>
            </>
          )}
          
          
        </div>
      </div>
    </div>
  )
}
