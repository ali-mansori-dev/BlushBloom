"use client";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { CategoryTableRow } from "@/types/CategoryTableRow";
import Supabase from "@/lib/helper/ClientSupabase";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import classes from "./HeaderMegaMenu.module.css";

import { Collapse, Group, Skeleton, Text } from "@mantine/core";

const CategoryContent = ({ linksOpened }: { linksOpened: boolean }) => {
  const [data, setData] =
    useState<PostgrestSingleResponse<CategoryTableRow[]>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      const products = await Supabase.from("bb_categories")
        .select("*")
        .order("created_at", { ascending: false });
      setIsLoading(false);
      products && setData(products);
    })();
  }, []);

//   if (isLoading) {
//     return <Skeleton height={50} />;
//   }

  return (
    <Collapse in={linksOpened}>
        111
      {data?.data?.map((item: CategoryTableRow) => (
        <Link
          href={`/collection/${item.id}`}
          className={classes.subLink}
          key={item.name}
        >
          <Group wrap="nowrap" align="flex-start">
            <div className="flex items-center gap-4">
              <img
                src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${item.image}`}
                className="w-[70] h-[70] object-cover rounded-lg border"
                alt={item.name}
              />
              <Text size="sm" fw={500}>
                {item.name}
              </Text>
            </div>
          </Group>
        </Link>
      ))}
    </Collapse>
  );
};

export default CategoryContent;
