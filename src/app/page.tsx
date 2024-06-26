import { db } from "@/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/c7818c8f-f213-4ca3-b61b-be8aa44c36b2-58t1h4.png",
  "https://utfs.io/f/37de1931-352e-4eac-8d49-e998916d262d-ezcxv8.png",
  "https://utfs.io/f/12b494c3-674a-43d1-be61-0c53e94637f8-iqw8fj.png",
  "https://utfs.io/f/b575eb61-9b16-4655-92de-9ee4b42917de-3gvair.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.images.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
