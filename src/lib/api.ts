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

// ...existing code...
export async function allPost(id?: number): Promise<Post[]> {
  const url = typeof id === 'number'
    ? `https://jsonplaceholder.typicode.com/posts/${id}`
    : 'https://jsonplaceholder.typicode.com/posts';

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
  const data = await res.json();

  // Normalize to Post[] so callers (like PostList) always get an array
  return Array.isArray(data) ? (data as Post[]) : ([data as Post]);
}
// ...existing code...