type CardProductProps = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export function CardProduct({ title, description, image, price }: CardProductProps) {
  return (
    <article className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="space-y-3 p-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <button
            type="button"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}