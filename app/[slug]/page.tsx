import {
  ActionIcon,
  Badge,
  Button,
  Chip,
  ColorSwatch,
  Container,
  Group,
  Text,
} from "@mantine/core";
import React from "react";
import { LuMinus, LuPlus, LuTrash } from "react-icons/lu";

const Slug = () => {
  return (
    <Container size={"xl"} className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/5 flex flex-col gap-4">
        <img
          src="https://i.imgur.com/ZL52Q2D.png"
          className="lg:w-full h-[280px] object-cover border rounded-lg"
        />
        <div className="w-full inline-flex gap-3">
          <img
            src="https://i.imgur.com/ZL52Q2D.png"
            className="w-[90px] h-[90px] object-cover border rounded-lg"
          />
          <img
            src="https://i.imgur.com/ZL52Q2D.png"
            className="w-[90px] h-[90px] object-cover border rounded-lg"
          />
        </div>
      </div>
      <div className="lg:w-3/5 flex flex-col gap-4">
        <div className="text-xl font-bold">Testla S Model</div>
        <p className="w-full text-sm text-gray-400 leading-7">
          Note that polymorphic components props types are different from
          regular components – they do not extend HTML element props of the
          default element. For example, ColorSwatchProps does not extend
          React.ComponentPropsWithoutRef
        </p>
        <div className="flex flex-row gap-4">
          <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
            $168.00
          </Text>
          <Text
            fz="sm"
            c="dimmed"
            fw={500}
            style={{ lineHeight: 1, textDecoration: "line-through" }}
            mt={3}
          >
            $160.00
          </Text>
          <Badge variant="outline">25% off</Badge>
        </div>
        <hr />
        <div className="">Choose Color</div>
        <Group>
          <ColorSwatch color="#009790" />
          <ColorSwatch
            color="rgba(234, 22, 174)"
            className="outline outline-2 outline-gray-700 outline-offset-4"
          />
          <ColorSwatch color="var(--mantine-color-orange-5)" />
        </Group>
        <div className="">Choose size</div>
        <Group>
          <Chip variant="outline" value="first">
            First
          </Chip>
          <Chip variant="outline" value="first">
            First
          </Chip>
          <Chip variant="outline" value="first">
            First
          </Chip>
        </Group>
        <div className="w-full inline-flex justify-between">
          <Button className="rounded-full" size="md">
            Add to Cart
          </Button>
          <div className="inline-flex items-center gap-2">
            <ActionIcon size={"lg"}>
              <LuTrash />
            </ActionIcon>
            <ActionIcon size={"lg"}>
              <LuMinus />
            </ActionIcon>
            <p className="w-[28px] text-center">{1}</p>
            <ActionIcon size={"lg"}>
              <LuPlus />
            </ActionIcon>
          </div>
          {/* <Button className="rounded-full" loading loaderProps={{ type: "dots" }}>
            Add to Cart
          </Button> */}
        </div>
        <hr />
        111
      </div>
    </Container>
  );
};

export default Slug;
