import { detailPost } from '@/lib/api';
interface PageProps {
    params: {
        id:number;
    }
}


import React from 'react'

async function page({params}:PageProps) {
    const { id } = params;
    const posts = await detailPost(id);
    const post = Array.isArray(posts) ? posts[0] : posts;

    if (!post) {
        return (
            <div className="post-detail">
                <h1>Post not found</h1>
            </div>
        );
    }

    console.log(post)

  return (
    <div className="post-detail">
        <h1>{post.title}</h1>
        <div className="content">{post.body}</div>
    </div>
  )
}

export default page
