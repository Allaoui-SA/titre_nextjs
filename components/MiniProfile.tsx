import React from 'react'

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img src="/profile_picture.webp" alt="" className="h-16 w-16 rounded-full border p-0.5" />
      
      <div className="flex-1 mx-4">
        <h2 className="font-bold">elthosan</h2>
        <h3 className="text-sm text-gray-400">Welcome to Mimstagram</h3>
      </div>

      <button className="font-semibold text-sm text-blue-500">Sign Out</button>
    </div>
  )
}
