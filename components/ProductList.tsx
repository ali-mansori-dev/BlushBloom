import React, { useContext, useEffect, useState } from "react";
import { Grid, LoadingOverlay, Skeleton } from "@mantine/core";
import { FeaturesCard } from "./FeaturesCard/FeaturesCard";
import { WixClientContext } from "@/context/wixContext";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const myWixClient = useContext(WixClientContext);

  useEffect(() => {
    (async function () {
      const { items } = await myWixClient.products.queryProducts().find();
      setIsLoading(false);
      setData(items);
    })();
  }, [myWixClient]);

  if (isLoading) {
    return <Skeleton height={50} />;
  }

  return (
    <div className="flex flex-col gap-8">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 30 }}>
        {data?.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: 3 }}>
            <FeaturesCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
