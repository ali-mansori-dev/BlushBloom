"use client";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import { LuYoutube, LuInstagram } from "react-icons/lu";
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from './FooterLinks.module.css';

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={`text-sm text-gray-500`}
        component="a"
        href={link.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={`flex flex-col gap-5`} key={group.title}>
        <Text className={`font-bold`}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer
      className={`w-full inline-flex flex-col bg-gray-100 border-t py-12 gap-16`}
    >
      <Container
        className={`w-full flex flex-col lg:flex-row justify-between gap-12`}
        size={"xl"}
      >
        <div className={`lg:w-1/3`}>
          <span className="text-xl font-bold">BlushBloom</span>
          <Text size="xs" c="dimmed" className={`mt-4 w-full`}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div
          className={`flex flex-col lg:flex-row justify-around gap-10 w-2/3`}
        >
          {groups}
        </div>
      </Container>
      <Container
        className={`w-full flex justify-between border-t pt-9`}
        size={"xl"}
      >
        <Text c="dimmed" size="sm">
          this site development by{" "}
          <a
            href="https://github.com/ali-mansori-dev"
            className="text-blue-700"
            target="_blank"
          >
            ali-mansori-dev
          </a>
        </Text>

        <Group gap={12} className={``} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <LuYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <LuInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
