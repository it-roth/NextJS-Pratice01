"use client";

import { AsideComponentDashboard } from "@/components/dashboard/AsideComponentDashboard";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
  products,
  blogs,
  setting,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  blogs: React.ReactNode;
  setting: React.ReactNode;
}) {
  const pathname = usePathname();
  const showProductsList = pathname === "/dashboard/products";

  return (
    <div className="grid grid-cols-4 gap-5">
      <AsideComponentDashboard />
      {/* for render components as slot */}
      <section className="grid col-span-3">
        <div className="bg-red-100">{children}</div>
        {/* slot product */}
        {showProductsList ? <div className="bg-red-300">{products}</div> : null}
        {/* slot blog */}
        <div className="bg-red-600"> {blogs}</div>
        {/* slot setting */}
        <div className="bg-red-900">{setting}</div>
      </section>
    </div>
  );
}
