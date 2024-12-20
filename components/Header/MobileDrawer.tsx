import { Button, Divider, Drawer, Group, ScrollArea } from "@mantine/core";
import React from "react";
import CategoryContent from "./CategoryContent";
import { useSelector } from "react-redux";
import Link from "next/link";

const MobileDrawer = ({
  drawerOpened,
  closeDrawer,
  linksOpened,
}: {
  drawerOpened: boolean;
  closeDrawer: () => void;
  linksOpened: boolean;
}) => {
  const is_authed = useSelector((state: any) => state.auth.is_authed);

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title="Blush Bloom"
      hiddenFrom="sm"
      zIndex={1000000}
    >
      <ScrollArea h="calc(100vh - 80px" mx="-md">
        <Divider my="sm" />
        <CategoryContent linksOpened={linksOpened} />
        {is_authed ? (
          <Group justify="center" grow pb="xl" px="md">
            <Link href={`/panel/`}>
              <Button onClick={closeDrawer} variant="default" fullWidth>
                Panel
              </Button>
            </Link>
            <Link href={`/cart/`}>
              <Button onClick={closeDrawer} fullWidth>
                Cart
              </Button>
            </Link>
          </Group>
        ) : (
          <Group justify="center" grow pb="xl" px="md">
            <Button onClick={closeDrawer} variant="default">
              Log in
            </Button>
          </Group>
        )}
      </ScrollArea>
    </Drawer>
  );
};

export default MobileDrawer;
