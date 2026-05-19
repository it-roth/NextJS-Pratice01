
import Link from "next/link";

type Post = {
    id: number;
    title: string;
    body: string;
    tags?: string[];
};

export default async function BlogSlug({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL ?? "https://dummyjson.com").trim();
    const res = await fetch(`${baseUrl}/posts/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        return <div>Post not found</div>;
    }

    const post = (await res.json()) as Post;

    return (
        <div className="mx-auto w-full max-w-3xl px-4 py-15">
            <Link
                href="/blog"
                className="inline-flex items-center text-body underline mb-6"
            >
                Back to blog
            </Link>

            <div className="rounded-base border border-default bg-neutral-secondary-soft p-6 shadow-xs flex flex-col gap-4">
                <div className="text-body opacity-70">Post #{post.id}</div>
                <h1 className="text-heading font-semibold">{post.title}</h1>
                <p className="text-body">{post.body}</p>
                {post.tags?.length ? (
                    <p className="text-body opacity-70">Tags: {post.tags.join(", ")}</p>
                ) : null}
            </div>
        </div>
    );
}