// ...existing code...
import PostList from '@/components/PostList'
import {allPost} from "@/lib/api";
// ...existing code...
export default async function Page() {
  // pass an options object (adjust shape to what allPost expects)
  const posts = await allPost();
  return (
    <>
      <div className="main-heading">
        <h2>Daftar Tulisan</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus consequatur accusamus magnam architecto laudantium sed ipsa ex, eveniet distinctio nobis, mollitia alias ipsum ut a aperiam voluptates ratione iure.
        </p>
      </div>
      <PostList posts={posts}/>
    </>
  )
}
// ...existing code...