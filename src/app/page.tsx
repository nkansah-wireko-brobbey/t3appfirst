import { db } from "~/server/db"
import Link from "next/link";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/92163a77-2bce-47cf-9508-daf850f1b1cf-6jsdg1.png",
  "https://utfs.io/f/a213eca9-75b1-4911-a28c-d11542a1a992-3g0bzy.png",
  "https://utfs.io/f/ac6d5af4-549d-4755-abe1-804f14d09307-qmupdx.png"
]

const mockImages = mockUrls.map((url, index)=> ({
  url,
  id: index+1
}))

export default async function HomePage() {
const posts = await db.query.posts.findMany()
  return (
    <main>
      <div className="flex flex-wrap gap-4">
      {
        posts.map((post)=>(<div key={post.id} className="p-4 w-48">
          {post.name}
        </div>))
      }
        {
          mockImages.map((image)=>(
            <div className="p-4 w-48" key={image.id}>
              <img src={image.url} className="object-cover" alt="" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
