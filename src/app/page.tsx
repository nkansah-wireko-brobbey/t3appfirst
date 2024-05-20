import { db } from "~/server/db"
import Link from "next/link";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";


export default async function HomePage() {
const images = await db.query.images.findMany({
  orderBy: (model, {desc})=> desc(model.id)
})
  return (
    <main>
      <div className="flex flex-wrap gap-4">
           {
          images.map((image)=>(
            <div className="p-4 w-48" key={image.id}>
              <img src={image.url} className="object-cover" alt={image.name} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
