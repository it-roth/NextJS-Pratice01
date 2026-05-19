import Link from "next/link";

export interface blogTypeDummy {
  id: number;
  title: string;
  body: string;
}

export default function BlogComponentDummy({ id, title, body }: blogTypeDummy) {
  const excerpt = body.length > 140 ? `${body.slice(0, 140)}...` : body;

  return (
    <Link
      href={`/blog/${id}`}
      className="block rounded-base border border-default bg-neutral-secondary-soft p-6 shadow-xs hover:bg-neutral-tertiary-medium"
    >
      <div className="text-body opacity-70">Post #{id}</div>
      <h2 className="mt-2 text-heading font-semibold">{title}</h2>
      <p className="mt-3 text-body">{excerpt}</p>

      <div className="mt-5 inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Read more
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </div>
    </Link>
  );
}