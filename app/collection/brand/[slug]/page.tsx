"use client";
import { FeaturesCard } from "@/components/FeaturesCard/FeaturesCard";
import Supabase from "@/lib/helper/ClientSupabase";
import { ProductsTableRow } from "@/types/ProductsTableRow";
import { Container, Grid, Loader } from "@mantine/core";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BrandCollection = () => {
  const params = useParams();

  const slug = params.slug;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] =
    useState<PostgrestSingleResponse<ProductsTableRow[]>>();

  useEffect(() => {
    (async function () {
      const products = await Supabase.from("bb_products")
        .select("*")
        .eq("brand", slug)
        .order("created_at", { ascending: false });
      setIsLoading(false);
      products && setData(products);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center py-8">
        <Loader type="dots" color="blue" />
      </div>
    );
  }

  return (
    <Container size={"xl"} className="flex flex-col lg:flex-row gap-12">
      <Grid gutter={{ base: 20, xs: "md", md: "xl", xl: 30 }}>
        {data?.data?.map((item, index, array) => (
          <Grid.Col key={index} span={{ base: 12, xs: 3 }}>
            <FeaturesCard product={item} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default BrandCollection;
