import { ProductType } from "@/lib/product-v2/product";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data?.data?.content ?? [];
  } catch {
    return [];
  }
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const products = await getProducts();
  const product = products.find((item: ProductType) => item.uuid === uuid);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-2">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
            Product detail
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            {product.name}
          </h1>
        </div>

        <Link href="/dashboard/products" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
        Back to products
      </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="grid gap-8 p-6 md:grid-cols-[380px_1fr] md:items-start md:p-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-50 p-4">
          <img
            src={product.thumbnail}
            alt={product.name}
              className="h-[420px] w-full rounded-[1.25rem] object-cover"
          />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Overview</p>
              <p className="mt-3 inline-flex rounded-full bg-sky-50 px-4 py-2 text-xl font-bold text-sky-700">
                {product.priceOut}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Description
              </h2>
              <p className="mt-3 max-w-2xl leading-8 text-slate-700">
                {product.description}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">UUID:</span> {product.uuid}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}