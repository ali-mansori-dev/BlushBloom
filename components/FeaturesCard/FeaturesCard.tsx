import Link from "next/link";
import { ActionIcon, Button, Card, Group, Image, Text } from "@mantine/core";
import { urlFor } from "@/sanity/lib/image";
import { LuPlus, LuStar } from "react-icons/lu";

export function FeaturesCard({ product }: { product: any }) {
  return (
    <Link href={`/p/${product?.slug?.current}`}>
      <Card
        withBorder
        radius="md"
        className={`bg-white border border-gray-200`}
      >
        <Card.Section
          className={"flex items-center justify-center bg-white py-4"}
        >
          <Image
            src={urlFor(product?.images && product.images[0]).url()}
            alt={product?.name}
            className="h-[180px]"
          />
        </Card.Section>

        <Card.Section
          className={`flex flex-col gap-4 justify-between border-t border-gray-300 py-1 px-4`}
          mt="md"
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <LuStar fill="#faaf00" color="#faaf00" />
              <span className="text-xs">4.0</span>
            </div>
            <span className="text-sm">My</span>
          </div>
          <div className="w-full line-clamp-1">
            <Text fw={400}>{product?.name}</Text>
          </div>
        </Card.Section>

        <Card.Section className={` p-4`}>
          <Group gap={30} justify="space-between">
            <div className="">
              <Text fz="lg" fw={700} style={{ lineHeight: 1 }}>
                $ {product.price.toFixed(2)}
              </Text>
            </div>

            <ActionIcon variant="outline" aria-label="Settings">
              <LuPlus />
            </ActionIcon>
          </Group>
        </Card.Section>
      </Card>
    </Link>
  );
}
