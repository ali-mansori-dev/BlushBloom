import React, { useEffect, useState } from "react";
import { Grid, Skeleton } from "@mantine/core";
import { FeaturesCard } from "./FeaturesCard/FeaturesCard";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async function () {
      const products = await client.fetch(groq`*[_type=="product"]`);
      setIsLoading(false);
      products && setData(products);
    })();
  }, []);

  if (isLoading) {
    return <Skeleton height={50} />;
  }

  return (
    <div className="flex flex-col gap-8">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 30 }}>
        {data?.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: 3 }}>
            <FeaturesCard product={item} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
