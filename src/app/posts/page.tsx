import Image from "next/image";
import Link from "next/link";

import {getPost} from "@/lib/api"
import PostList from '@/components/PostList'
import { allPost } from "@/lib/api";


export default async function Page() {
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
