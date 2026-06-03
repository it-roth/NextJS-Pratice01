import ProductCardComponent from "@/components/products/ProductCard";
import { ProductType } from "@/lib/product-v2/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// async function to getProductPage
async function getProducts() {
  try {
    const res = await fetch(`http://localhost:3000/api/products`, {
      cache: "no-store",
    });
    const data = await res?.json();
    console.log("Data from /dashboard/products", data);
    return data;
  } catch (error) {
    return {
      data: {
        content: [],
      },
    };
  }
}
export default async function ProductPageRoute() {
  const data = await getProducts();
  const products = data?.data?.content ?? [];
  const productCount = products.length;

  return (
    <div className="flex flex-col gap-10">
      

      <ProductRenderingProcess data={data} />
    </div>
  );
}
//loading suspense component
function LoadingSuspenseComponent() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
      <Image
        width={500}
        height={500}
        alt="suspense loading"
        src="https://dev-portal.motforex.com/_next/image?url=https://cdn.motforex.com/motforex/logo/logo.webp&w=48&q=75"
        className="rounded-full h-20 w-20"
      ></Image>
    </div>
  );
}

function ProductRenderingProcess({ data }: { data: { data?: { content?: ProductType[] } } }) {
  console.log("THIS IS DATA", data);
  const products = data?.data?.content ?? [];

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Empty catalog
        </p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950">No products available yet</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
          Add your first product to start filling this dashboard with real content.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map(({ thumbnail, name, priceOut, description, uuid }: ProductType) => (
        <Link
          key={uuid}
          href={`/dashboard/products/${uuid}`}
          className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
        >
          <div className="p-1">
            <ProductCardComponent
              description={description}
              uuid={uuid}
              thumbnail={thumbnail}
              name={name}
              priceOut={priceOut}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
