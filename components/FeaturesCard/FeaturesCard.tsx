import Link from "next/link";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

interface Props {
  name: string;
  slug: string;
  price: {
    formatted: {
      price: string;
    };
  };
  media: {
    mainMedia: {
      image: {
        url: string;
      };
    };
  };
}

export function FeaturesCard({ name, slug, price, media }: Props) {
  return (
    <Link href={`/${slug}`}>
      <Card
        withBorder
        radius="md"
        className={`bg-gray-50 border border-gray-300`}
      >
        <Card.Section
          className={
            "flex items-center justify-center  border-b border-gray-300"
          }
        >
          <Image
            src={media.mainMedia.image.url}
            alt="Tesla Model S"
            className="h-[200px]"
          />
        </Card.Section>

        <Card.Section
          className={`flex justify-between border-t border-gray-300 p-4`}
          mt="md"
        >
          <div>
            <Text fw={500}>{name}</Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Card.Section>

        <Card.Section className={`border-t border-gray-300 p-4`}>
          <Group gap={30}>
            <div>
              <Text fz="lg" fw={700} style={{ lineHeight: 1 }}>
                {price.formatted.price}
              </Text>
              {/* <Text
                fz="sm"
                c="dimmed"
                fw={500}
                style={{ lineHeight: 1, textDecoration: "line-through" }}
                mt={3}
              >
                $160.00
              </Text> */}
            </div>

            <Button radius="xl" style={{ flex: 1 }}>
              Add to Cart
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </Link>
  );
}
