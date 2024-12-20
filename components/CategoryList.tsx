import { PostgrestSingleResponse } from "@supabase/supabase-js";
import React, { useContext, useEffect, useState } from "react";
import { Grid, LoadingOverlay, Skeleton } from "@mantine/core";
import { CategoryTableRow } from "@/types/CategoryTableRow";
import CategoryCard from "@/components/CategoryCard/index";
import Supabase from "@/lib/helper/ClientSupabase";
import CartSkeleton from "./Skeleton/cart_skeleton";
import CategorySkeleton from "./Skeleton/category_skeleton";

const CategoryList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] =
    useState<PostgrestSingleResponse<CategoryTableRow[]>>();

  useEffect(() => {
    (async function () {
      const products = await Supabase.from("bb_categories")
        .select("*")
        .order("created_at", { ascending: false });
      setIsLoading(false);
      products && setData(products);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-row gap-6">
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <Grid gutter={{ base: 20, xs: "md", md: "xl", xl: 30 }}>
        {data?.data?.map((category, index) => (
          <Grid.Col key={index} span={{ base: 6, xs: 3 }}>
            <CategoryCard category={category} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryList;
