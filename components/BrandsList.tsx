import { PostgrestSingleResponse } from "@supabase/supabase-js";
import CategoryCard from "@/components/CategoryCard/index";
import { BrandTableRow } from "@/types/BrandTableRow";
import React, { useEffect, useState } from "react";
import Supabase from "@/lib/helper/ClientSupabase";
import { Grid, Skeleton } from "@mantine/core";

import BrandCard from "./BrandCard";

const BrandsList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<PostgrestSingleResponse<BrandTableRow[]>>();

  useEffect(() => {
    (async function () {
      const products = await Supabase.from("bb_brands")
        .select("*")
        .order("created_at", { ascending: false });
      setIsLoading(false);
      products && setData(products);
    })();
  }, []);

  if (isLoading) {
    return <Skeleton height={50} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <Grid gutter={{ base: 20, xs: "md", md: "xl", xl: 30 }}>
        {data?.data?.map((brand, index) => (
          <Grid.Col key={index} span={{ base: 4, xs: 3 }}>
            <BrandCard brand={brand} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default BrandsList;
