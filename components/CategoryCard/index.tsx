import { CategoryTableRow } from "@/types/CategoryTableRow";
import Link from "next/link";

export default function CategoryCard({ category }: { category: CategoryTableRow }) {
  return (
    <Link
      href={`/collection/${category?.id}`}
      className="flex flex-col items-center justify-center gap-1"
    >
      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${category.image}`}
          className="w-[200px] h-[200px] object-cover"
          alt={category?.name}
        />
      </div>
      <span className="text-lg">{category?.name}</span>
    </Link>
  );
}
