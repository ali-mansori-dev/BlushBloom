import { BrandTableRow } from "@/types/BrandTableRow";
import Link from "next/link";

export default function BrandCard({ brand }: { brand: BrandTableRow }) {
  return (
    <Link
      href={`/collection/brand/${brand?.id}`}
      className="flex flex-col items-center justify-center gap-1"
    >
      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${brand.image}`}
          className="w-[162px] h-[162px] object-cover"
          alt={brand?.name}
        />
      </div>
    </Link>
  );
}
