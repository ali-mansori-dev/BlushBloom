"use client";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container size={"xl"} className="flex flex-col gap-12">
      <div className="w-full text-center text-lg font-bold">Categories</div>
      <CategoryList />

      <div className="w-full text-center text-lg font-bold">Products</div>
      <ProductList />
    </Container>
  );
}
