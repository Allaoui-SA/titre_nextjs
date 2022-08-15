import {
  HeartIcon,
  PaperAirplaneIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline"
import { DotsHorizontalIcon } from "@heroicons/react/solid"
import { addDoc, collection, query, onSnapshot, orderBy, serverTimestamp, setDoc } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import Moment from "react-moment"

export default function Post({id, username, userImg, img, caption}) {
  const { data: session } = useSession()
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  useEffect(() => onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), snapshot => setComments(snapshot.docs)), [db, id])

  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session?.user?.name,
      userImg: session?.user?.image,
      timestamp: serverTimestamp()
    })
  }
  
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
      {session && ( 
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <HeartIcon className="feed-btn" />
            <ChatIcon className="feed-btn" />
            <PaperAirplaneIcon className="feed-btn" />
          </div>
          <BookmarkIcon className="feed-btn" />        
        </div>
      )}

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map( comment => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img 
                className="h-7 rounded-full"
                src={comment.data().userImg}
                alt="" />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}
                </span>{" "} 
                {comment.data().comment}
                </p>

                <Moment fromNow className="pr-5 text-xs">
                  {comment.data().timestamp?.toDate()}
                </Moment>
            </div>
          ))}
        </div>
      )}
      {/* Input box */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input 
            type="text" 
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none" />
          <button 
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-500">Post</button>
        </form>
      )}
    </div>
  )
}
