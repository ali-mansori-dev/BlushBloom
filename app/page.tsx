"use client";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container size={"xl"} className="flex flex-col gap-12">
      CategoryList
      <CategoryList />
      ProductList
      <ProductList />
    </Container>
  );
}
