import Image from "next/image";
import ContactPage from "./contact/page";
// removed incorrect product type import
import { CardProduct } from "@/components/my-card/product-card";
import Pagination from "@/components/pagination";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      title: "Coca Cola",
      description: "Refreshing soft drink with ice-cold taste",
      image:
        "https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/apizza/products/coca-cola-Cola.jpg",
      price: 1.5,
    },
    {
      title: "Pepsi",
      description: "Classic cola drink with bold flavor",
      image:
        "https://i5.walmartimages.com/seo/Pepsi-Cola-Soda-Pop-2-Liter-Bottle_297e1fa7-ccfe-41ac-8712-b60046000cd0.340c56162d8eb0cf194fe9581072c357.jpeg",
      price: 1.4,
    },
    {
      title: "Sprite",
      description: "Lemon-lime soda, fresh and crisp",
      image:
        "https://i5.walmartimages.com/asr/78e20c3c-7737-4513-9d30-8673ef8490e8.9e6cc08778b754a5417f24b6e604a422.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      price: 1.3,
    },
    {
      title: "Fanta",
      description: "Sweet orange flavored soft drink",
      image:
        "https://i5.walmartimages.com/seo/Fanta-Orange-Fruit-Soda-Pop-16-9-fl-oz-6-Pack-Bottles_2f576a39-ac7e-4e3c-8128-190084545684.f47e5b45652ac91dd4a88de042b4cc50.jpeg",
      price: 1.4,
    },
    {
      title: "Coca Cola Zero",
      description: "Sugar-free Coca Cola with same great taste",
      image:
        "https://m.media-amazon.com/images/I/71FBcWNG4RL._AC_UF894,1000_QL80_DpWeblab_.jpg",
      price: 1.5,
    },
    {
      title: "Mountain Dew",
      description: "Citrus-flavored soft drink with strong energy taste",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2H-ClRbD1hJgH2Hy09dM5CmJIt2azlU-fuA&s",
      price: 1.6,
    },
    {
      title: "Dr Pepper",
      description: "Unique blend of 23 flavors soda drink",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinHNGMHwZ3CUalQZ2ReCf5WbXdcuTWY1-hQ&s",
      price: 1.7,
    },
    {
      title: "7UP",
      description: "Crisp lemon-lime soft drink, caffeine free",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dC5lpuidVTy8kudeVYdL6mRT6WYDBazG4Q&s",
      price: 1.3,
    },
    {
      title: "Red Bull",
      description: "Energy drink that gives you wings",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Feb29SIT-GIwteB6kt3Cf6xAaOHWf3O6Tw&s",
      price: 2.5,
    },
    {
      title: "Lipton Ice Tea",
      description: "Refreshing iced tea with lemon flavor",
      image:
        "https://www.britvic.com/media/vcqmrsv2/lipton-lemon-can-banner.jpg?rxy=0.493858743131014,0.56045060264983126&width=1200&height=600&v=1d9cf91cc940300",
      price: 1.8,
    },
    {
      title: "Mirinda Orange",
      description: "Sweet orange soda with fruity taste",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1awGW324J7Jgpi0YJXnbCN6agE2hX48mR-A&s",
      price: 1.4,
    },
    {
      title: "Canada Dry Ginger Ale",
      description: "Light and refreshing ginger-flavored soda",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLGOAd7Cdrj5klqbZLuzn22M9mjm-VmFqmA&s",
      price: 1.6,
    },
  ];
  return (
    <div className="min-h-screen  py-10">
      <div className="w-full container mx-auto px-4">
        <h1 className="text-4xl font-light text-center py-5">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {" "}
          {products.map((d, index) => (
            <CardProduct
              key={index}
              title={d.title}
              description={d.description}
              image={d.image}
              price={d.price}
            />
          ))}
        </div>
        <Link href={"/dashboard"}>Go to dashbaord</Link>
        <Pagination />
      </div>
    </div>
  );
}
