import { Avatar, Card, Group, Image, Text } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';

export function CardVertical() {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src="https://i.imgur.com/ZL52Q2D.png"
          className='w-[70px] h-[70px] object-cover'
          alt='image'
        />
        <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md">
            The best laptop for Frontend engineers in 2022
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Avatar
                size={20}
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              />
              <Text size="xs">Elsa Typechecker</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              Feb 6th
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}