import React from 'react'
import Link from "next/link"
import {Post} from "@/types/post"



interface PostListProps {
    posts: Post[]
} 

function PostList({posts}:PostListProps) {
  
  return (
        <div className="post-list">
      {
        posts.map((post) => (
          <div className="post-item" key={post.id}>
            <h2><Link href={`posts/${post.id}`}>{post.title}</Link></h2>
          </div>
        ))
    }

    </div>
  )
}

export default PostList
