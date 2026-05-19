import BlogComponentDummy, { blogTypeDummy } from "@/components/BlogComponentDummy";

type PostsResponse = {
  posts: blogTypeDummy[];
};

export default async function BlogPage() {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL ?? "https://dummyjson.com").trim();
  const res = await fetch(`${baseUrl}/posts`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return <div>Failed to load posts</div>;
  }

  const data = (await res.json()) as PostsResponse;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-15">
      <div className="mb-6">
        <h1 className="text-heading font-semibold">Blog</h1>
        <p className="text-body opacity-70">Click a post to view details</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((post) => (
          <BlogComponentDummy key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}