import Link from "next/link";

interface Props {
  name: string;
  slug: string;
  media: { mainMedia: { thumbnail: { url: string } } };
}
export default function CategoryCard({ name, slug, media }: Props) {
  return (
    <Link
      href={`/c/${slug}`}
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="bg-gray-100 rounded-xl overflow-hidden">
        <img src={media?.mainMedia?.thumbnail?.url} className="w-[90px] h-[90px] object-cover" alt={name} />
      </div>
      <span className="text-lg">{name}</span>
    </Link>
  );
}
