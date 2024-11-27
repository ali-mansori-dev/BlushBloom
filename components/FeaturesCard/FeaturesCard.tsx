import Link from 'next/link';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';

export function FeaturesCard() {

  return (
    <Link href={`/3652142`}>
      <Card withBorder radius="md" className={`bg-gray-50 border border-gray-300`}>
        <Card.Section className={'flex items-center justify-center  border-b border-gray-300'}>
          <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" className='h-[200px]' />
        </Card.Section>

        <Card.Section className={`flex justify-between border-t border-gray-300 p-4`} mt="md">
          <div>
            <Text fw={500}>Tesla Model S</Text>
          </div>
          <Badge variant="outline">25% off</Badge>
        </Card.Section>

        <Card.Section className={`border-t border-gray-300 p-4`}>
          <Group gap={30}>
            <div>
              <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                $168.00
              </Text>
              <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1, textDecoration:'line-through' }} mt={3}>
                $160.00
              </Text>
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