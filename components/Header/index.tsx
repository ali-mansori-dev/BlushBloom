"use client";
import {
  UnstyledButton,
  ScrollArea,
  Container,
  HoverCard,
  Collapse,
  Divider,
  Anchor,
  Burger,
  Button,
  Center,
  Drawer,
  Group,
  Text,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { LuChevronDown } from "react-icons/lu";
import Link from "next/link";

import { InputWithButton } from "../InputWithButton";
import classes from "./HeaderMegaMenu.module.css";
import CategoryContent from "./CategoryContent";
import UserDropDown from "./Menu";
import Cart from "./cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Supabase from "@/lib/helper/ClientSupabase";
import { add_to_cart } from "@/Features/Cart/cartSlice";

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const dispatch = useDispatch();

  //   {
  //   price?: number;
  // }

  useEffect(() => {
    (async function () {
      const user = await Supabase.auth.getUser();
      if (user) {
        const user_id = user?.data?.user?.id;
        const { data } = await Supabase.rpc("get_cart_with_product_details", {
          user_uuid: user_id,
        });
        data?.map((value: any) => {
          dispatch(
            add_to_cart({
              id: value.cart_id,
              color: value.color,
              size: value.size,
              name: value.product_name,
              image_url: value.product_images[0],
              quantity: value.quantity,
              product_id: value.product_id,
              price: value.product_price.toFixed(2),
            })
          );
        });
      }
    })();
  }, []);

  return (
    <Box pos={"fixed"} top={0} left={0} right={0} bg={"#fff"} className="z-50">
      <header className={classes.header}>
        <Container className={`w-full`} size={"xl"}>
          <Group justify="space-between" h="100%">
            <div className="inline-flex gap-12 items-center">
              <Link className="text-xl font-bold" href={`/`}>
                BlushBloom
              </Link>
              {/* <Group h="100%" gap={24} visibleFrom="sm">
                <HoverCard
                  width={600}
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                >
                  <HoverCard.Target>
                    <a href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Categories
                        </Box>
                        <LuChevronDown color="blue" />
                      </Center>
                    </a>
                  </HoverCard.Target>

                  <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                    <Group justify="space-between" px="md">
                      <Text fw={500}>Categories</Text>
                      <Anchor href="#" fz="xs">
                        View all
                      </Anchor>
                    </Group>
                    <Divider my="sm" />
                    12131
                    <CategoryContent linksOpened={linksOpened} />
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group> */}
            </div>

            <div className="w-[430px] hidden md:block">
              <InputWithButton />
            </div>
            <Group visibleFrom="sm">
              <UserDropDown />
              <Cart />
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
            </Center>
          </UnstyledButton>
          <Divider my="sm" />
          <CategoryContent linksOpened={linksOpened} />
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
