"use client";
import { useContext, useEffect, useState } from "react";
import {
  ActionIcon,
  Badge,
  Button,
  Chip,
  ColorSwatch,
  Container,
  Group,
  Loader,
  Text,
} from "@mantine/core";
import { LuMinus, LuPlus, LuTrash } from "react-icons/lu";
import { useParams, useSearchParams } from "next/navigation";
import { ProductsTableRow } from "@/types/ProductsTableRow";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Supabase from "@/lib/helper/ClientSupabase";

const Slug = () => {
  const params = useParams();

  const slug = params.slug;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] =
    useState<PostgrestSingleResponse<ProductsTableRow[]>>();

  useEffect(() => {
    (async function () {
      const products = await Supabase.from("bb_products")
        .select("*")
        .eq("slug", slug)
        .order("created_at", { ascending: false });
      setIsLoading(false);
      products && setData(products);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader type="dots" color="blue" />
      </div>
    );
  }

  return (
    <Container size={"xl"} className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/5 flex flex-col gap-4">
        <img
          src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${
            data?.data && data?.data[0]?.images[0]
          }`}
          className="lg:w-[380px] h-[380px] object-cover border rounded-lg"
        />
        <div className="w-full inline-flex gap-3">
          {data?.data &&
            data?.data[0]?.images?.map((value: any, index: any) => {
              return (
                <img
                  src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${value}`}
                  key={index}
                  className="w-[90px] h-[90px] object-cover border rounded-lg"
                />
              );
            })}
        </div>
      </div>
      <div className="lg:w-3/5 flex flex-col gap-4">
        <div className="text-xl font-bold">
          {data?.data && data?.data[0]?.name}
        </div>
        <p className="w-full text-sm text-gray-400 leading-7 line-clamp-4">
          {data?.data && data?.data[0]?.description}
        </p>
        <div className="flex flex-row gap-4">
          <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
            $ {data?.data && data?.data[0]?.price.toFixed(2)}
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
          <Button
            className="rounded-full"
            loading
            loaderProps={{ type: "dots" }}
          >
            Add to Cart
          </Button>
        </div>
        <hr />
      </div>
    </Container>
  );
};

export default Slug;
