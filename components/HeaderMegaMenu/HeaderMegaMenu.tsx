"use client";
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Skeleton,
  Text,
  //   ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderMegaMenu.module.css";
import Link from "next/link";
import UserDropDown from "./Menu";
import Cart from "./cart";
import { LuChevronDown } from "react-icons/lu";
import { InputWithButton } from "../InputWithButton";
import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const mockdata = [
  {
    // icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    // icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    // icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    // icon: IconFingerprint,
    title: "Hair Cair",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    // icon: IconChartPie3,
    title: "Skin Care",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    // icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async function () {
      const product = await client.fetch(groq`*[_type=="categoriy"]`);
      // setIsLoading(false);
      product && setData(product);
    })();
  }, []);

  // if (isLoading) {
  //   return <Skeleton height={50} />;
  // }

  const mockdata = data.map((item) => {
    return {
      title: item.name,
      id: item._id,
      image: item?.images || "",
    };
  });
  console.log(mockdata);

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const links = mockdata.map((item) => (
    <Link
      href={`/collection/${item.id}`}
      className={classes.subLink}
      key={item.title}
    >
      <Group wrap="nowrap" align="flex-start">
        <div className="flex items-center gap-4">
          <img
            src={urlFor(item.image).url()}
            className="w-[70] h-[70] object-cover rounded-lg border"
            alt={item.title}
          />
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </div>
      </Group>
    </Link>
  ));

  return (
    <Box pos={"fixed"} top={0} left={0} right={0} bg={"#fff"} className="z-50">
      <header className={classes.header}>
        <Container className={`w-full`} size={"xl"}>
          <Group justify="space-between" h="100%">
            <div className="inline-flex gap-12 items-center">
              <Link className="text-xl font-bold" href={`/`}>
                BlushBloom
              </Link>
              <Group h="100%" gap={24} visibleFrom="sm">
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

                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </div>

            <div className="w-[380px] hidden md:block">
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
          <Collapse in={linksOpened}>{links}</Collapse>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
