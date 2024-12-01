import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function CategoryCard({ category }: { category: any }) {
  return (
    <Link
      href={`/collection/${category?._id}`}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={urlFor(category?.images).url()}
          className="w-[250px] h-[250px] object-cover"
          alt={category?.name}
        />
      </div>
      <span className="text-lg">{category?.name}</span>
    </Link>
  );
}
