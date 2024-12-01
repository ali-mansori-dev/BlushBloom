import React, { useContext, useEffect, useState } from "react";
import { Grid, LoadingOverlay, Skeleton } from "@mantine/core";
import CategoryCard from "@/components/CategoryCard/index";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const CategoryList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async function () {
      const product = await client.fetch(groq`*[_type=="categoriy"]`);
      setIsLoading(false);
      product && setData(product);
    })();
  }, []);

  if (isLoading) {
    return <Skeleton height={50} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 30 }}>
        {data?.map((category, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: 3 }}>
            <CategoryCard category={category} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryList;
