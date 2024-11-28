import React, { useContext, useEffect, useState } from "react";
import { Grid, LoadingOverlay, Skeleton } from "@mantine/core";
import CategoryCard from "@/components/CategoryCard/index";
import { WixClientContext } from "@/context/wixContext";

const CategoryList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const wixClient = useContext(WixClientContext);

  useEffect(() => {
    (async function () {
      const { items } = await wixClient.collections.queryCollections().find();
      setIsLoading(false);
      setData(items);
      console.log(items);
    })();
  }, [wixClient]);

  if (isLoading) {
    return <Skeleton height={50}  />;
  }

  return (
    <div className="flex flex-col gap-6">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 30 }}>
        {data?.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: 3 }}>
            <CategoryCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryList;
