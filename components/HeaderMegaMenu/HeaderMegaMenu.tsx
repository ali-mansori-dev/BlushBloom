"use client";
// import {
//   IconBook,
//   IconChartPie3,
//   IconChevronDown,
//   IconCode,
//   IconCoin,
//   IconFingerprint,
//   IconNotification,
// } from "@tabler/icons-react";
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
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    // icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    // icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        {/* <ThemeIcon size={34} variant="default" radius="md"> */}
        {/* <item.icon size={22} color={theme.colors.blue[6]} /> */}
        {/* </ThemeIcon> */}
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
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
                <a href="#" className={classes.link}>
                  Home
                </a>
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
                          Features
                        </Box>
                        <LuChevronDown color="blue" />
                      </Center>
                    </a>
                  </HoverCard.Target>

                  <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                    <Group justify="space-between" px="md">
                      <Text fw={500}>Features</Text>
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
                <a href="#" className={classes.link}>
                  Learn
                </a>
                <a href="#" className={classes.link}>
                  Academy
                </a>
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

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              {/* <IconChevronDown size={16} color={theme.colors.blue[6]} /> */}
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

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
