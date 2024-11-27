import React from "react";
import { Grid } from "@mantine/core";
import CategoryCard from "@/components/CategoryCard/index";

const CategoryList = () => {
  return (
    <div className="flex flex-col gap-6">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 30 }}>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <CategoryCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <CategoryCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <CategoryCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <CategoryCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <CategoryCard />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default CategoryList;
