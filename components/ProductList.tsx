import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { ProductsTableRow } from "@/types/ProductsTableRow";
import React, { useEffect, useState } from "react";
import Supabase from "@/lib/helper/ClientSupabase";
import { Grid } from "@mantine/core";

import { FeaturesCard } from "./FeaturesCard/FeaturesCard";
import CartSkeleton from "./Skeleton/cart_skeleton";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] =
    useState<PostgrestSingleResponse<ProductsTableRow[]>>();

  useEffect(() => {
    (async function () {
      const products = await Supabase.from("bb_products")
        .select("*")
        .order("created_at", { ascending: false });
      setIsLoading(false);
      products && setData(products);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-row gap-6">
        <CartSkeleton />
        <CartSkeleton />
        <CartSkeleton />
        <CartSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <Grid gutter={{ base: 20, xs: "md", md: "xl", xl: 30 }}>
        {data?.data?.map((item, index, array) => (
          <Grid.Col key={index} span={{ base: 12, xs: 3 }}>
            <FeaturesCard product={item} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
