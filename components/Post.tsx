import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline"
import { DotsCircleHorizontalIcon, DotsHorizontalIcon, HomeIcon } from "@heroicons/react/solid"

import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"

export default function Post({id, username, userImg, img, caption}) {
  return (
    <div className="bg-white my-7 border rounded-sm">  
      {/* Header */}
      <div className="flex items-center p-5">
        <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
        <p className="flex-1 text-sm font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5"/>
      </div>

      {/* Image */}
      <img src={img} alt="" className="object-cover bg-center w-full" />

      {/* Buttons */}
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <HeartIcon className="feed-btn" />
          <ChatIcon className="feed-btn" />
          <PaperAirplaneIcon className="feed-btn" />
        </div>
        <BookmarkIcon className="feed-btn" />        
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input type="text" placeholder="Add a comment..." className="border-none flex-1 focus:ring-0 outline-none" />
        <button className="font-semibold text-blue-500">Post</button>
      </form>
    </div>
  )
}
