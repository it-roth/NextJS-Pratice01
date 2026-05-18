import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Baby cats",
    price: 109.95,
    image: "https://i1-e.pinimg.com/1200x/0e/b3/61/0eb3612f3d8dd017403ad78cc9a3d6d8.jpg",
  },
  {
    id: 2,
    title: "Baby cats",
    price: 109.95,
    image: "https://i1-e.pinimg.com/1200x/0e/b3/61/0eb3612f3d8dd017403ad78cc9a3d6d8.jpg",
  },
  {
    id: 3,
    title: "Baby cats",
    price: 109.95,
    image: "https://i1-e.pinimg.com/1200x/0e/b3/61/0eb3612f3d8dd017403ad78cc9a3d6d8.jpg",
  },
  {
    id: 4,
    title: "Baby cats",
    price: 109.95,
    image: "https://i1-e.pinimg.com/1200x/0e/b3/61/0eb3612f3d8dd017403ad78cc9a3d6d8.jpg",
  },
  {
    id: 5,
    title: "Baby cats",
    price: 109.95,
    image: "https://i.pinimg.com/736x/55/33/b0/5533b070a9264891af777a91d142c3e1.jpg",
  },
  {
    id: 6,
    title: "Baby cats",
    price: 109.95,
    image: "https://i.pinimg.com/736x/55/33/b0/5533b070a9264891af777a91d142c3e1.jpg",
  },
  {
    id: 7,
    title: "Baby cats",
    price: 109.95,
     image: "https://i.pinimg.com/736x/55/33/b0/5533b070a9264891af777a91d142c3e1.jpg",
  },
  {
    id: 8,
    title: "Baby cats",
    price: 109.95,
     image: "https://i.pinimg.com/736x/55/33/b0/5533b070a9264891af777a91d142c3e1.jpg",
  },
];

export default function ProductPage() {
  return (
    <div className="container mx-auto pt-24 p-8">
      <h1 className="text-center text-heading font-semibold text-2xl mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-base border border-default bg-neutral-primary-soft p-4 flex flex-col"
          >
            <div className="flex justify-center py-4">
              <Image
                src={p.image}
                alt={p.title}
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            <h2 className="text-heading font-semibold text-sm uppercase truncate">
              {p.title}
            </h2>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-fg-brand font-semibold">
                {p.price.toFixed(2)}$
              </span>
              <button
                type="button"
                className="rounded-base bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white text-sm"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
