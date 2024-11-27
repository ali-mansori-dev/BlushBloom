import React from "react";
import { Grid } from "@mantine/core";
import { FeaturesCard } from "./FeaturesCard/FeaturesCard";


const ProductList = () => {
  return (
    <div className="flex flex-col gap-8">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 30 }}>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <FeaturesCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <FeaturesCard />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ProductList;
