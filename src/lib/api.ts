import {Post} from "@/types/post"

export async function getPost():Promise<Post[]>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?limit=5");
  const posts = await res.json();
  console.log(posts)
  return posts;
    
}
export async function detailPost(id:number):Promise<Post[]>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  console.log(posts)
  return posts;
    
}

export async function allPost(id:number):Promise<Post[]>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts)
  return posts;
    
}