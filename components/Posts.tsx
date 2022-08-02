import Post from './Post'

const posts = [
  {
    id: '1',
    username: 'elthosan',
    userImg: 'profile_picture.webp',
    img: 'festival_1.jpeg',
    caption: 'Hello LOREM IPSUM!',
  },
  {
    id: '2',
    username: 'alastor',
    userImg: 'profile_picture.webp',
    img: 'festival_2.jpeg',
    caption: 'Les Rock\'n\'Rollers!',
  }
]

export default function Posts() {
  
  return (
    <div>
      {posts.map((post) => (
        <Post 
          key={post.id} 
          id={post.id} 
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />

      ))}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  )
}
